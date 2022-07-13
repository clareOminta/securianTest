exports.config = {
    
    path: '/',
    
    specs: [
        './test/test1.spec.js'
    ],
    
    
    maxInstances: 10,
    
    capabilities: [{
    
        maxInstances: 5,
        
        browserName: 'chrome',
        
    }],
    
    logLevel: 'silent',
    
    bail: 0,
    baseUrl: 'http://localhost',
    
    services: ['chromedriver'],
    
    framework: 'jasmine',
    reporters: ['spec'],

    jasmineOpts: {
        defaultTimeoutInterval: 600000
    }

    
    
}