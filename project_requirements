class ProjectRequirements {
    constructor() {
        this.inventoryManagementRequirements = {};
        this.orderProcessingRequirements = {};
        this.customerInteractionRequirements = {};
        this.networkingSecurityRequirements = {};
        this.automationNeeds = {};
        this.linuxWindowsEnvironmentHandling = {};
        this.staticCodeAnalysisApproach = {};
    }

    captureInventoryManagementRequirements(requirements) {
        this.inventoryManagementRequirements = requirements;
    }

    captureOrderProcessingRequirements(requirements) {
        this.orderProcessingRequirements = requirements;
    }

    captureCustomerInteractionRequirements(requirements) {
        this.customerInteractionRequirements = requirements;
    }

    captureNetworkingSecurityRequirements(requirements) {
        this.networkingSecurityRequirements = requirements;
    }

    captureAutomationNeeds(needs) {
        this.automationNeeds = needs;
    }

    captureLinuxWindowsEnvironmentHandling(strategy) {
        this.linuxWindowsEnvironmentHandling = strategy;
    }

    captureStaticCodeAnalysisApproach(approach) {
        this.staticCodeAnalysisApproach = approach;
    }
}
// Instantiate ProjectRequirements class
const projectReqs = new ProjectRequirements();

// Capture requirements for inventory management
const inventoryRequirements = {
    tracking: ['product details', 'stock levels', 'supplier information'],
    automation: ['automated inventory tracking'],
    efficiency: ['reduce manual intervention']
};
projectReqs.captureInventoryManagementRequirements(inventoryRequirements);

// Capture requirements for order processing
const orderProcessingRequirements = {
    workflow: ['order capture', 'payment processing', 'fulfillment'],
    automation: ['automated order processing'],
    efficiency: ['reduce manual intervention']
};
projectReqs.captureOrderProcessingRequirements(orderProcessingRequirements);

// Capture requirements for customer interactions
const customerInteractionRequirements = {
    channels: ['chatbots', 'self-service portals', 'personalized recommendations'],
    automation: ['enhanced customer interactions']
};
projectReqs.captureCustomerInteractionRequirements(customerInteractionRequirements);

// Capture networking and security requirements
const networkingSecurityRequirements = {
    infrastructure: ['VPN', 'firewalls', 'intrusion detection/prevention systems'],
    security: ['data encryption', 'access control', 'compliance']
};
projectReqs.captureNetworkingSecurityRequirements(networkingSecurityRequirements);

// Capture automation needs
const automationNeeds = {
    ciCd: ['CI/CD pipelines', 'automated testing frameworks'],
    scalability: ['auto-scaling', 'fault tolerance'],
    disasterRecovery: ['redundancy', 'backup']
};
projectReqs.captureAutomationNeeds(automationNeeds);

// Capture strategy for Linux and Windows environment handling
const linuxWindowsEnvironmentHandling = {
    infrastructure: ['on-premises servers', 'cloud instances'],
    management: ['provisioning', 'configuration management', 'patching']
};
projectReqs.captureLinuxWindowsEnvironmentHandling(linuxWindowsEnvironmentHandling);

// Capture approach for static code analysis
const staticCodeAnalysisApproach = {
    toolSelection: ['SonarQube', 'Checkmarx', 'ESLint'],
    integration: ['CI/CD pipeline integration'],
    rulesConfiguration: ['coding standards', 'security vulnerabilities', 'performance optimizations'],
    reporting: ['issue tracking', 'remediation workflow']
};
projectReqs.captureStaticCodeAnalysisApproach(staticCodeAnalysisApproach);

// Print captured requirements and approaches
console.log("Inventory Management Requirements:", projectReqs.inventoryManagementRequirements);
console.log("Order Processing Requirements:", projectReqs.orderProcessingRequirements);
console.log("Customer Interaction Requirements:", projectReqs.customerInteractionRequirements);
console.log("Networking and Security Requirements:", projectReqs.networkingSecurityRequirements);
console.log("Automation Needs:", projectReqs.automationNeeds);
console.log("Linux/Windows Environment Handling Strategy:", projectReqs.linuxWindowsEnvironmentHandling);
console.log("Static Code Analysis Approach:", projectReqs.staticCodeAnalysisApproach);