describe('SBMap', function() {
    // Holds a reference to map in test
    var map;

    /**
     * Before and after each test we create a new map object
     */
    beforeEach(function() {
        map = new SBMap();
    });

    afterEach(function() {
        map.clear();
    });

    describe('constructor', function() {
        it('should initialize the empty set and set size to zero', function() {
            expect(map._set).not.toBeUndefined();
            expect(map._set).not.toBeNull();
            expect(map._set).toEqual(jasmine.any(Object));
            expect(map._size).toEqual(0);
        });
    });

    describe('set', function() {

        it('should add a key value pair', function() {
            var key = 1,
                value = 'testvalue';

            map.set(key, value);
            expect(map.get(key)).toEqual(value);
        })

        it('should not increment size if key is already present', function() {
            var key = 1,
                value = 'testvalue';

            map.set(key, value);
            map.set(key, value);
            expect(map.size()).toEqual(1);
        });

        it('should set the value associated with a key to a new value if the key is already present', function() {
            var key = 1,
                value = 'testvalue',
                newValue = 'newvalue';

            map.set(key, value);
            map.set(key, newValue);
            expect(map.get(key)).toEqual(newValue);
        })

        it('should return the value associated with the key if the value is already set', function() {
            var key = 1,
                value = 'testvalue';

            map.set(key, value);
            expect(map.set(key, value)).toEqual(value);
        })

    });
});