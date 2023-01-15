import { json, redirect } from '@remix-run/node';
import { useCatch, useLoaderData, useParams } from '@remix-run/react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Grid,
  Heading,
} from '@chakra-ui/react';
import { getNordigenClient } from '~/lib/nordigen.server';
import { commitSession } from '~/services/session.server';
import { authenticatedRequest } from '~/lib/user.server';
import { BankListItem } from '~/containers/bank-list';
import type { getUser } from '~/lib/user.server';
import type { Bank } from '~/types/wallet';
import type { LoaderFunction } from '@remix-run/node';

const DEFAULT_COUNTRY = 'NL';

interface LoaderData {
  availableBanks: Bank[];
  user: Awaited<ReturnType<typeof getUser>>;
}

export const loader: LoaderFunction = async (args) => {
  const { request } = args;
  await authenticatedRequest(request);
  const headers = new Headers(args.request.headers);

  // if (isPrefetch(request)) {
  headers.set('Cache-Control', 'private, max-age=5, smax-age=0');
  // }

  const country = new URL(request.url).searchParams.get('country');
  if (!country) {
    // TODO: get redirect country from request IP
    throw redirect(`?country=${DEFAULT_COUNTRY}`, { headers });
  }

  const {
    client: nordigenClient,
    access: token,
    session,
  } = await getNordigenClient(args);

  if (!session) {
    throw new Error('No session found');
  }
  if (token && session) {
    session.set('walletAccessToken', token);
  }

  try {
    const availableBanks: Bank[] =
      await nordigenClient.institution.getInstitutions({
        country,
      });

    headers.set('Set-Cookie', await commitSession(session));

    return json(
      {
        availableBanks,
      },
      {
        headers,
      },
    );
  } catch (error: any) {
    const requestError = error.response.data;

    if (requestError) {
      const { status_code, ...errorBody } = requestError;
      throw json(
        {
          ...errorBody,
        },
        {
          status: status_code,
        },
      );
    }

    throw error;
  }
};

export default function Banks() {
  const { availableBanks } = useLoaderData<LoaderData>();
  const { username } = useParams();

  return (
    <Box>
      <Heading as="h2" size="md" mb="4">
        Banks
      </Heading>
      <Box display="flex" flexDir="column">
        <Grid templateColumns={{ sm: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
          {availableBanks.map((bank) => (
            // <GridItem key={bank.id} w="100%">
            <BankListItem
              key={bank.id}
              to={`/${username}/wallet/agreements/${bank.id}`}
              name={bank.name}
              logoSrc={bank.logo}
            />
            // </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export const CatchBoundary = () => {
  const caught = useCatch();

  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Something went wrong</AlertTitle>
        {Object.values(caught.data).map((message, i) => (
          <AlertDescription key={i}>{message as string}</AlertDescription>
        ))}
      </Alert>
    </>
  );
};

export const ErrorBoundary = ({ error }: { error: any }) => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{error.statusText}</AlertTitle>
        <AlertDescription>
          {error.status === 400 ? error.message : error.statusText}
        </AlertDescription>
      </Alert>
    </>
  );
};
