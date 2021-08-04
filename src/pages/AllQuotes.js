import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'go_q1', author: 'Vagitus', text: 'A child is Born' },
	{
		id: 'go_q7',
		author: 'Steve',
		text: 'Make a difference!',
	},
];
function AllQuotes() {
	return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
