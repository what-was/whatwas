import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { BoardsProvider, SelectedBoardProvider } from './context';

export const App = () =>
{
	return (

		<SelectedBoardProvider>
			<BoardsProvider>
				<div className="App">
					<Header />
					<Content />

				</div>
			</BoardsProvider>
		</SelectedBoardProvider>
	);
};
