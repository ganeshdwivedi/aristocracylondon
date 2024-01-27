import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51OMDnwSAmOoZPtXBsn62MajVv7ygvYoY8aKX5g6susmp8aQUXGg14CjJ9KkQQ79Sl9DGWgfZjXHl7CV267l5DuTo00iY7UTv9o");
    }

    return stripePromise;
}

export default getStripe;