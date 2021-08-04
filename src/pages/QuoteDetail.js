import React, { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';
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
	const quoteId = params.quoteId;
	const quoteData = DUMMY_QUOTES.find(quote => quote.id === quoteId);
	if (!quoteData) {
		return <p>No Quote Found</p>;
	}
	return (
		<Fragment>
			<HighlightedQuote text={quoteData.text} author={quoteData.author} />
			<Route path={`/quotes/${quoteId}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`/quotes/${quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetail;
