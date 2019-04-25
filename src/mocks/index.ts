import { StoreState } from "../types";

export const INITIAL_STATE: StoreState = {
    isCreatingArticle: false,
    userName: undefined,
    articles: [
        {
            id: 1,
            author: 'Amy',
            date: 'yesterday',
            title: 'The React Handbook',
            votes: 17,
            showMore: false,
            hasVoted: false,
            body: `An introduction to the React view library
            What is React?
            React is a JavaScript library that aims to simplify development of visual interfaces.
            Developed at Facebook and released to the world in 2013, it drives some of the most widely used apps, powering Facebook and Instagram among countless other applications.
            Its primary goal is to make it easy to reason about an interface and its state at any point in time, by dividing the UI into a collection of components.
            Why is React so popular?
            React has taken the frontend web development world by storm. Why?
            Less complex than the other alternatives
            At the time when React was announced, Ember.js and Angular 1.x were the predominant choices as a framework. Both these imposed so many conventions on the code that porting an existing app was not convenient at all.
            React made a choice to be very easy to integrate into an existing project, because that’s how they had to do it at Facebook in order to introduce it to the existing codebase. Also, those 2 frameworks brought too much to the table, while React only chose to implement the View layer instead of the full MVC stack.`,
            comments: [
                {
                    author: 'Brian',
                    date: 'Yesterday',
                    text: 'Nice Article, dude!'
                },
                {
                    author: 'Zhu',
                    date: 'Today',
                    text: 'Very Helpful!'
                }
            ]
        },
        {
            id: 2,
            author: 'Tom',
            date: 'Today',
            title: 'Researchers Are Translating Brain Activity Into Speech',
            votes: 53,
            showMore: false,
            hasVoted: false,
            body: `Scientists are getting closer to developing a computer-generated tool to allow people with severe speech impairments — like the late cosmologist Stephen Hawking — to communicate verbally.
            In a paper published today in the journal Nature, a team of researchers at the University of California San Francisco (UCSF) report that they’re working on an early computerized system that can decode brain signals from movements made while speaking, and then translate those movements into sounds. The authors said in a press briefing that the study is a proof of principle that it’s possible to synthesize speech by reading brain activity. "It's been a long-standing goal of our lab to create technologies to restore communications for people with severe speech disability," says co-author Dr. Edward Chang, a neurosurgeon at UCSF.`,
            comments: [
                {
                    author: 'Hax0r',
                    date: 'Today',
                    text: 'Totally lame!'
                },
                {
                    author: 'Panda',
                    date: 'Today',
                    text: 'So cool!'
                },
                {
                    author: 'Shauna',
                    date: 'Today',
                    text: 'By modeling the vocal tract movements, “the authors tap into existing neural processes for speech production that are likely generative!'
                },
                {
                    author: 'Tim',
                    date: 'Today',
                    text: 'The system also requires placing a sensor directly on the brain, which limits the pool of people available to train the system.'
                }
            ]
        },
        {
            id: 3,
            author: 'Xavier Barns',
            date: 'Today',
            title: 'Why ‘Anonymized Data’ Isn’t So Anonymous',
            votes: 120,
            showMore: false,
            hasVoted: false,
            body: `2015, Latanya Sweeney, a researcher who studies data anonymization and privacy, published research specifically targeting the deanonymization of HIPAA-protected data in Washington. In that state, (and many others), it is possible for companies and individuals to purchase anonymized medical record data. Sweeney purchased data through legal channels that included, as she noted, “virtually all hospitalizations occurring in the state in a given year” and myriad details about those hospital visits, including diagnoses, procedures, the attending physician, a summary of charges, how the bill was paid, and more. The records were anonymous in that they did not contain the patients’ name or address, but they did include patients’ five-digit U.S. postal codes.`,
            comments: [
                {
                    author: 'Scieneguy1',
                    date: 'Yesterday',
                    text: 'Governments, corporations, and research institutes continue to roll out massive data collections.'
                },
                {
                    author: 'Panda',
                    date: 'Today',
                    text: 'As more data about us becomes publicly available, these deanonymizing strategies become easier.'
                },
                {
                    author: 'Shauna',
                    date: 'Today',
                    text: 'This is so interesting!!! :D'
                },
                {
                    author: '420yolo',
                    date: 'Today',
                    text: 'Research continues to corroborate the core result — that a shockingly small amount of information might be personally identifying, especially given the enormous amount of data available for an adversary to correlate against.'
                }
            ]
        },
        {
            id: 4,
            author: 'Xavier Barns',
            date: 'Today',
            title: 'Check out this Article I found!',
            votes: 120,
            showMore: false,
            hasVoted: false,
            body: `https://techcrunch.com/2019/04/24/microsoft-beats-expectations-with-30-6b-in-revenue-as-azures-growth-continues/`,
            comments: [
                {
                    author: 'Scieneguy1',
                    date: 'Yesterday',
                    text: 'Go Microsoft!'
                },
                {
                    author: 'Panda',
                    date: 'Today',
                    text: 'great earnings beat'
                },
                {
                    author: 'Shauna',
                    date: 'Today',
                    text: 'This is so interesting!!! :D'
                }
            ]
        }
    ]
}