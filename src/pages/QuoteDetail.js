import React, { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
	{ id: 'go_q1', author: 'Vagitus', text: 'A child is Born' },
	{
		id: 'go_q7',
		author: 'Steve',
		text: 'Make a difference!',
	},
];

function QuoteDetail() {
	const params = useParams();
	const match = useRouteMatch();
	console.log(match);
	const quoteId = params.quoteId;
	const quoteData = DUMMY_QUOTES.find(quote => quote.id === quoteId);
	if (!quoteData) {
		return <p>No Quote Found</p>;
	}
	return (
		<Fragment>
			<HighlightedQuote text={quoteData.text} author={quoteData.author} />
			<Route path={`${match.path}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetail;
