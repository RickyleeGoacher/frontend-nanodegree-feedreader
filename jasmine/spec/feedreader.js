/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL defined and has url', function() {
            //Loop through each feed in allFeeds and store them in feed
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); //Check URL is defined
                expect(feed.url.length).not.toBe(0); //Check to see is the URL length is not 0
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name defined and has name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); //Check if the name is defined
                expect(feed.name.length).not.toBe(0); //Check to see if the name length is not 0
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */

        it('should be hidden by default', function() {
            expect(document.body.classList).toContain('menu-hidden'); //Expect the body to contain the class menu-hidden
        });

        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

        //When the menu icon is clicked it should not contain the class menu-hidden
        it('should change visibility when clicked', function() {
            $('.menu-icon-link').click();
            expect(document.body.classList).not.toContain('menu-hidden');
        //When the menu icon is Clicked again, it should contain the class menu-hidden
            $('.menu-icon-link').click();
            expect(document.body.classList).toContain('menu-hidden');
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {
        //Check to see is loadFeed is called has completed its work
        //Done set as callback
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

        //Check if feed and entry length is not 0
        it('has an entry', function() {
            expect($('.feed').length).not.toBe(0);
            expect($('.entry').length).not.toBe(0);
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('New Feed Selection', function() {

        let initialFeed; //varialble to store feed

        beforeEach(function(done) {
            //Load the first feed defined with the index of 0
            loadFeed(0, function() {
                initialFeed = $('.feed').html();//Save the HTML of the feed in a variable
            })
            //Load the Second feed defined with the index of 1
            loadFeed(1, function() {
                secondFeed = $('.feed').html();
                done();
            })
            
        });

        it('has updated the feed', function() {
            expect(secondFeed).not.toEqual(initialFeed); //Checks to see if secondFeed is not equal to initalFeed
        });

    });

}());