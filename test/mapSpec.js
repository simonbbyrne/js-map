describe('SBMap', function() {
    //Holds a reference to map in test
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

    describe('get', function() {
        it('should return the value associated with the key if it exists; otherwise undefined', function() {
            var key = 1,
                value = 'testvalue';

            expect(map.get(0)).toBeUndefined();
            map.set(key, value);
            expect(map.get(key)).toEqual(value);
        });

        it('should return undefined when attempting to get value with null or NaN key', function() {
            var key = 1,
                value = 'testvalue';

            expect(map.get(null)).toBeUndefined();
            expect(map.get(NaN)).toBeUndefined();
        });
    });

    describe('remove', function() {

        it('should remove the key value pair', function() {
            var key = 1,
                value = 'testvalue';
            map.set(key, value);
            map.remove(key);
            expect(map.get(key)).toBeUndefined();
        });

        it('should decrement the value of size when a key value pair is removed', function() {
            var key = 1,
                value = 'testvalue';
            map.remove(10);
            expect(map.size()).toEqual(0);

            map.set(key, value);
            expect(map.size()).toEqual(1);

            map.remove(key);
            expect(map.size()).toEqual(0);
        });

    });

    describe('size', function() {

        it('should return 0 when empty', function() {
            expect(map.size()).toBe(0);
        });

        it('should return the size', function() {
            var key = 1,
                value = 'testvalue',
                key1 = 2,
                value1 = 'testvalue1';

            map.set(key, value);
            map.set(key1, value1);
            expect(map.size()).toEqual(2);
        });

    });

    describe('clear', function() {
        it('should empty the map', function() {
            var key = 1;
            var value = 'testvalue';

            expect(map.isEmpty()).toEqual(true);

            map.set(key, value);
            expect(map.isEmpty()).toEqual(false);

            map.clear();
            expect(map.isEmpty()).toEqual(true);
        });
    });

    describe('has', function() {

        it('should return true if the object has the key property', function() {
            spyOn(Object.prototype, 'hasOwnProperty').and.returnValue(true);
            expect(map.has(1)).toEqual(true);
        });

        it('should return true if the object has the key property', function() {
            spyOn(Object.prototype, 'hasOwnProperty').and.returnValue(false);
            expect(map.has(1)).toEqual(false);
        });

    });

    describe('isEmpty', function() {
        it('should return true if empty', function() {
            var key = 1,
                value = 'testvalue';

            expect(map.isEmpty()).toEqual(true);
            map.set(key, value);
            map.remove(key);
            expect(map.isEmpty()).toEqual(true);
        });
    });

    describe('values', function() {

        it('should return an array', function() {
            var key = 1,
                value = 'testvalue',
                key1 = 2,
                value1 = 'testvalue';
            expect(map.values()).toEqual(jasmine.arrayContaining([]));

            map.set(key, value);
            map.set(key1, value1);
            expect(map.values()).toEqual(jasmine.arrayContaining([value, value1]));
        });

        it('should not return a value in the array if the property cannot be found on that objects prototype', function() {
            var key = 1,
                value = 'testvalue';
            spyOn(map, 'has').and.returnValue(false);

            map.set(key, value);
            expect(map.values()).toEqual(jasmine.arrayContaining([]));
        });
    });

});
