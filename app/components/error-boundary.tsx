import {
  type ErrorResponse,
  isRouteErrorResponse,
  useParams,
  useRouteError,
} from '@remix-run/react'
// import { captureRemixErrorBoundaryError } from '@sentry/remix'
import { type ReactElement } from 'react'
import { getErrorMessage } from '~/lib/misc'

type StatusHandler = (info: {
  error: ErrorResponse
  params: Record<string, string | undefined>
}) => ReactElement | null

export function CommonErrorBoundary({
  defaultStatusHandler = ({ error }) => (
    <p>
      {error.status} {error.data}
    </p>
  ),
  statusHandlers,
  unexpectedErrorHandler = (error) => <p>{getErrorMessage(error)}</p>,
}: {
  defaultStatusHandler?: StatusHandler
  statusHandlers?: Record<number, StatusHandler>
  unexpectedErrorHandler?: (error: unknown) => ReactElement | null
}) {
  const error = useRouteError()
  // captureRemixErrorBoundaryError(error)
  const params = useParams()

  if (typeof document !== 'undefined') {
    console.error(error)
  }

  return (
    <div className="container flex h-full items-center justify-center p-20 text-h2">
      {isRouteErrorResponse(error)
        ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
          error,
          params,
        })
        : unexpectedErrorHandler(error)}
    </div>
  )
}