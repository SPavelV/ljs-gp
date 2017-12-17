var add = function(a,b) {
    return a + b;
};

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

var sum = add(3, 4);
console.log(sum);

myObject.double = function() {
    var that = this;

    var helper = function() {
        that.value = add(that.value, that.value);
    };

    helper();
};

myObject.double();
console.log(myObject.value);

var Quo = function (string) {
    this.status = string;
};

Quo.prototype.get_status = function () {
    return this.status;
};

var myQuo = new Quo('confused');
console.log(myQuo.get_status());

var array = [3, 4];
var sum = add.apply(null, array);

var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);


var sum = function () {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i +=1) {
        sum += arguments[i];
    }
    return sum;
};

console.log(sum(4, 8, 15, 16, 23, 42));

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'typeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
};

var try_it = function () {
    try {
        add('seven');
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
};
try_it();


Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function(){
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer());

String.method('trim', function (){
   return this.replace(/A\s+|\s+$/g, '');
});

console.log('"' + " neat ".trim() + '"');

Function.prototype.method = function (name, func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while(node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

var getElementsByAttribute = function (att, value) {
    var result = [];

    walk_the_DOM(document.body, function(node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
            (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
};

var myObject = (function () {
    var value = 0;
    return {
        increment: function(inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    }
}());

var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    }
};

var myQuo = quo('amazed');
console.log(myQuo.get_status());

var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step,100);
};

fade(document.body);


var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i +=1) {
        nodes[i].onclick = function(e) {
            alert(i);
        }
    }
};

var add_the_handlers = function (nodes) {
    var helper = function (i) {
        return function(e) {
            alert(i);
        };
    };

    var i;
    for (i = 0; i < nodes.length; i +=1) {
        nodes[i].onclick = helper(i);
    }
};

