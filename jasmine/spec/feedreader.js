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

        /* Test to ensure that each feed in the allFeeds object has a
         * URL defined and also ensure the URL length is not zero.
         */

        it('URL defined and has url', function() {
            //Loop through each feed in allFeeds and store them in feed
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); //Check URL is defined
                expect(feed.url.length).not.toBe(0); //Check to see is the URL length is not 0
            });
        });

        /* Test to ensure that each feed in the allFeeds object has a
         * name defined and also ensure the name length is not zero.
         */

        it('name defined and has name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); //Check if the name is defined
                expect(feed.name.length).not.toBe(0); //Check to see if the name length is not 0
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    /*Test that ensures the menu element is hidden by default
    * Check whether the body contains the class menu-hidden
    * Listen for the click on menu-icon-link and expect the body not to contain the class menu hidden
    * Listen for a second click and expect the body to contain menu-hidden
    */    

    describe('The menu', function() {

        it('should be hidden by default', function() {
            expect(document.body.classList).toContain('menu-hidden'); //Expect the body to contain the class menu-hidden
        });

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

        /* Test that ensures when the load feed function is called it completes its work
         * and check to ensure that the .feed container contains at least one .entry element
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
            expect($('.feed .entry').length).not.toBe(0);
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* Test to ensure that when the new feed is loaded the content actually changes.
         * Achieved by setting an index for each feed and saving then in a variable each and compairing
         * them ensuring they are not the same
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