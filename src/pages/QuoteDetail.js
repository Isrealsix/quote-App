import React, { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
function QuoteDetail() {
	const params = useParams();
	const quoteId = params.quoteId;
	return (
		<Fragment>
			<h1>Quote Detail Page</h1>
			<p>{params.quoteId}</p>
			<Route path={`/quotes/${quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetail;
