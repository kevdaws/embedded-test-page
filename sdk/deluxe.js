//This will render buttons in a <div id="digitalwallets"></div>
//JWT for Auth

const DigitalWalletsPay = {

  /**
   * @type {string} Pay buttons container id.
   */
  containerId: 'digitalwallets',

  /**
   * @type {string} Pay button width
   */
   walletswidth: '180px',

  /**
   * @type {string} Pay button height
   */
   walletsheight: '40px',

  /**
   * @type {string} Product panel background color
   */
  productsbgcolor: '#000',

  /**
   * @type {string} Product panel font color
   */
  productsfontcolor: '#fff',

  /**
   * @type {string} Wallets container background color
   */
  walletsbgcolor: '',
  
  /**
   * @type {string} Wallet font color
   */
    walletsfontcolor: '',

    /**
   * @type {string} Payment panel font family
   */
    paymentfontfamily: '',

  /**
   * @type {'light' | 'dark'} Payment panel style
   */
    paymentpanelstyle: null,

    /**
     * @type {string} Payment panel color
     */
    paymentpanelcolor: '',

    /**
   * @type {string} Payment panel font color
   */
    paymentfontcolor: '',

    /**
   * @type {string} Payment panel input color
   */
    paymentinputcolor: '',

    /**
   * @type {string} Payment panel label color
   */
    paymentlabelcolor: '',

    /**
   * @type {string} Payment panel placeholder color
   */
    paymentphcolor: '',
  
  /**
   * @type {string} Wallet Buttons holding container border radius
   */
  walletsborderradius: '10px',

  /**
   * @type {string} Wallet Buttons holding container padding
   */
  walletspadding: '10px',

  /**
   * @type {string} Gap between buttons
   */
  walletsgap: '14px',

  /**
   * @type {string} iframe pay button color
   */
    paybuttoncolor: '',

    /**
   * @type {string} iframe pay button text (Pay | Donate)
   */
    paybuttontext: '',

  /**
   * @type {string} iframe cancel button color
   */
    cancelbuttoncolor: '',

  /**
   * @type {string} iframe font size
   */
  fontSize: '',

  /**
   * @type {string} iframe font family
   */
  fontFamily: 'Poppins',

  /** 
  * @type {string}
  */
  jwt: '',

  /**
   * @type {number | string} payment amount in cent
   */
  amount: 0,

  /**
   * @type {string} payment backend base url
   * Uncomment empty base Url for testing only, this should not be checked in as empty string.
   */
  //baseUrl: '',
    baseUrl: 'https://payments2.deluxe.com/embedded',


  /**
   * @type {string} wallet button theme
   */
  walletButtonTheme: 'black',

  /**
   * @type {string} firstpay
   */
  googlePayGateway: 'firstpay',

  /**
   * @type {string | number} merchantId
   */
  merchantId: '',

  /**
   * @type {string}
   */
  domain: '',

  /**
   * @type {string} merchantName
   */
  merchantName: '',

  /**
   * @type {boolean} ApplePay availablity on the device
   */
  isApplePayAvailable: false,

  /**
   * @type {boolean} ApplePay enabled / disabled in the merchant configuration
   */
  isApplePayEnabled: true,

    /**
   * @type {boolean} Tokenization enabled / disabled
   */
    generateToken: false,

  /**
   * @type {ApplePaySession | null}
   */
  applePaySession: null,

  /**
   * @type {string} PRODUCTION | TEST
   */
  googlePayEnv: 'PRODUCTION',

  /**
   * GooglePay enabled / disabled in the merchant configuration
   * @type {boolean}
   */
  isGooglePayEnabled: true,

  /**
   * ApplePay button type
   * @type {string}
   */
  applePayButtonStyle: 'plain',

  /**
   * GooglePay button type
   * @type {string}
   */
  googlePayButtonStyle: 'plain',

  /**
   * GooglePay PaymentsClient object or null
   * @type {PaymentsClient}
   */
  googlePayPaymentsClient: null,

  /**
   * GooglePay merchant Id
   * @type {string}
   */
  googleId: '',

  /**
   * GooglePay AuthJwt
   * @type {string}
   */
  googleAuthJwt: '',
  
  /**
   * GooglePay emailRequired field value
   * @type {boolean}
   */
  emailRequired: true,

  /**
   * Supported payment methods
   * @type {string[] | null} 
   */
    paymentMethods: [],

  /**
   * Payment country code
   * @type {string}
   */
  countryCode: 'US',

  /**
   * Payment currency code
   * @type {string}
   */
  currencyCode: 'USD',

  /**
   * For applepay merchantCapabilities
   * @type {['supportes3Ds'] | [] | null}
   */
  merchantCapabilities: ['supports3DS'],

  /**
   * For googlePay allowedCardAuthMethods
   * @type string[] - Available values: "PAN_ONLY", "CRYPTOGRAM_3DS"
   */
  allowedCardAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],

  /**
   * Supported payment networks
   * @type {string[]} 
   */
  supportedNetworks: ['visa', 'masterCard', 'amex', 'discover'],

  /**
   * @type {string[]} show applepay button always or only if the device supports it.
   */
  showApplePayButton: 'supported',

  /**
   * Current transaction type is recurring payment
   * @type {boolean}
   */
  isRecurring: false,

  /**
   * recurring payment description
   * @type {string}
   */
  description: '',

  /**
   * recurring payment start date
   * @type {string}
   */
  startDate: '',

  /**
   * recurring payment end date
   * @type {string}
   */
  endDate: '',

  /**
   * recurring payment interval unit
   * @type {string} 'year' | 'month' | 'day' | 'hour' | 'minute'
   */
  frequency: 'monthly',

  /**
   * recurring payment interval count
   * @type {number}
   */
  intervals: 6,

  /**
   * A URL to a web page where the user can update or delete the payment method for the recurring payment.
   * @type {string}
   */
  managementUrl: '',

  /**
   * A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.
   * @type {string}
   */
  billingAgreement: '',

  /**
   * Disbursement instructions
   * @type {{ disbursementId: string, amount: number }[]}
   */
  disbursement: [],

  /**
   * @type {boolean} 
   */
  isPayPalEnabled: false,

  /**
   * @type {boolean} 
   */
  isPayPalPayLaterEnabled: false,

  /**
   * @type {boolean} 
   */
  isVenmoEnabled: false,

  /**
   * @type {string}
   */
  paypalClientId: '',

  /**
   * @type {string}
   */
  paypalEmailAddress: '',

  /**
   * @type {string}
   */
  paypalMerchantId: '',

  /**
   * @type {string}
   */
  sessionId: '',

  /**
   * @type {string}
   */
  customer: {},

  /**
   * @type {boolean} 
   */
  isPazeEnabled: false,

  /**
   * @type {string}
   */
  pazeJsSdkUrl: '',

  /**
   * @type {string}
   */
  pazeClientId: '',

  /**
   * @type {string}
   */
  pazeMerchantName: '',

  /**
   * @type {string}
   */
  pazeMCC: '', 

  /**
   * @type {Client}
   */
  pazeClient: null,

  /**
   * @type {string}
   */
  paypalBNCode: '',

  /**
   * Paypal subscriptioin plan id
   * @type {string}
   */
  paypalPlanId: '',

  /**
   * Paypal Transaction type
   * @type {string[]} 'paypal' | 'venmo' | 'bnpl'
   */
  paypalFundingSource: ['paypal', 'bnpl', 'venmo'],

    /**
  * Should we skip the Paypal Seller Status Query to save time on buttons loading
   * @type {boolean}
   */
  skipSellerStatusCheck: false,

  /**
   * Allow to bypass the complete process
   * @type { boolean }
   */
  skipCompleteAuthorization: false,

  /**
   * @type { boolean }
   */
  donotloadthirdpartysdks: false,

  /**
   * @type { boolean }
   */
  ach: false,

  /**
   * 
   * @type { boolean }
   */
  hasCC: false,

  /**
   * @type { string }
   */
  chariotConnectId: '',

  /**
   * @type { boolean }
   */
  isChariotEnabled: false,

  
  /**
  * @type { double }
  */
  chariotApplicationFee:0.0,


  /**
   * @type { Object }
   */
  chariotSuccessDetail: null,

  /**
   * @type { string }
   */
  chariotJsSdkUrl: '',

    /**
    * @type { string }
    */
    parentHostName: '',

    /**
   * @type { string }
   */
    applePaytokenNotificationURL: '',

    /**
 * @type {string}
 */
    applePayJsSdkUrl: '',

 /**
* @type {string}
*/
    applePayMerchantIdentifier: '',

  /**
   * 
   * Payment Authorized even handler when skipCompleteAuthorization is true
   * @param {'ApplePay' | 'GooglePay' | 'Paypal' | 'Card' | 'Paze' | 'Chariot'} gateway 
   * @param data 
   * @return {void}
   */
  onTxnAuthorized: (gateway, data) => {},

  /**
   * Payment Success Event Handler
   * @param {'ApplePay' | 'GooglePay' | 'Paypal' | 'Card' | 'Paze' | 'Chariot'} gateway Payment gateway
   * @param data Payment platform specific success payload
   * @return {void} void
   */
  onTxnSuccess: (gateway, data) => {},

  /**
   * Payment Failure Event Handler
   * @param {'ApplePay' | 'GooglePay' | 'Paypal' | 'Card' | 'Paze' | 'Chariot'} gateway Payment gateway
   * @param data Payment platform specific failed payload
   * @return {void} void
   */
  onTxnFailed: (gateway, data) => {},

  /**
   * Payment Validation Error Handler
   * @param {'ApplePay' | 'GooglePay' | 'Paypal' | 'Card' | 'Paze' | 'Chariot'} gateway Payment gateway
   * @param errors Payment platform specific failed payload
   * @return {void} void
   */
  onValidationError: (gateway, errors) => {},

  /**
   * Payment Cancel Event Handler
   * @param {'ApplePay' | 'GooglePay' | 'Paypal' | 'Card' | 'Paze' | 'Chariot'} gateway
   * @param data Payment platform specific cancel payload
   * @return {void} void
   */
  onCancel: (gateway, data) => {},

    /**
   * Tokenization Success Event Handler
   */
    onTokenSuccess: (gateway, data, paymentDetailType) => {},

    /**
     * Tokenization Failure Event Handler
     */
    onTokenFailed: (gateway, data, paymentDetailType) => {},
  
  getWalletButtonTheme:(str) => {
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = str;
    let bgColor = ctx.fillStyle;
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
      'black' : 'white';
  },

  /**
  * @param {Object} object
  * @param {string} key
  * @return {any} value
  */
  getParameterCaseInsensitive(object, key) {
    const asLowercase = key.toLowerCase();
    return object[Object.keys(object)
      .find(k => k.toLowerCase() === asLowercase)
    ];
  },

  /**
     * Getting data from customer info EmbeddedSDK.
     */
    getCustomerInfoFromEmbeddedSDK: null,

  /**
   * Initialize the DigitalWalletsPay session
   * @param {string} jwt
   * @param {{
   * countryCode: string,
   * currencyCode: string,
   * merchantCapabilities: string[],
   * supportedNetworks: string[],
   * allowedCardAuthMethods: string[],
   * googlePayEnv: boolean,
   * }} options
   * @return Promise<DigitalWalletsPay>
   */
  async init (jwt, options = {}) {
    this.jwt = jwt;
    
    const {
      paymentMethods,
      countryCode,
      currencyCode,
      merchantCapabilities,
      supportedNetworks,
      allowedCardAuthMethods,
      googlePayEnv,
      showApplePayButton,
      skipCompleteAuthorization,
    } = options;

    if(paymentMethods){
      this.paymentMethods = paymentMethods;
    }

    if (countryCode) {
      this.countryCode = countryCode;
    }

    if (showApplePayButton) {
      this.showApplePayButton = showApplePayButton;
    }

    if (currencyCode) {
      this.currencyCode = currencyCode;
    }

    if (merchantCapabilities) {
      this.merchantCapabilities = merchantCapabilities;
    }

    if (supportedNetworks) {
      this.supportedNetworks = supportedNetworks;
    }

    if (allowedCardAuthMethods) {
      this.allowedCardAuthMethods = allowedCardAuthMethods;
    }

    if (googlePayEnv) {
      this.googlePayEnv = googlePayEnv;
    }
    
    if (skipCompleteAuthorization) {
      this.skipCompleteAuthorization = true;
    }

    if (this.getParameterCaseInsensitive(options, 'donotloadthirdpartysdks') == true) {
      this.donotloadthirdpartysdks = true;
    }

    //remove /embedded below to run locally
    return fetch(`${this.baseUrl}/authorizeMerchant`, {
      method: 'POST',
      headers: {
        // It's using 'text/plain' content type because browser sends options request
        // before 'application/json' content post request
          'Content-Type': 'text/plain',
      },
      body: JSON.stringify({ jwt: this.jwt, paymentMethods: (this.paymentMethods.indexOf('cc') !== -1 ||  this.paymentMethods.indexOf('ach') !== -1 ? this.paymentMethods : undefined)})
    })
    .then(async (res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw await res.json();
      }
    })
    .then(({
      amount,
      applePayEnabled,
      googlePayEnabled,
      merchantId,
      merchantDisplayName,
      recurring,
      applePayButtonStyle,
      googlePayButtonStyle,
      domain,
      googleId,
      authJwt,
      emailRequired,
      paypalEnabled,
      paypalPayLaterEnabled,
      venmoEnabled,
      paypalClientId,
      paypalMerchantId,
      paypalFundingSource,
      paypal_bn_code,
      pazeClientId,
      pazeJsSdkUrl,
      pazeMerchantName,
      mccCode,
      pazeEnabled,
      sessionId,
      customer,
      skipSellerStatusCheck,
      ach,
      hasCC,
      chariotConnectId,
      chariotEnabled,
      chariotJsSdkUrl,
      generateToken,
      baseUrl,
      chariotApplicationFee,
      applePaytokenNotificationURL,
      applePayJsSdkUrl,
      applePayMerchantIdentifier
    }) => {
      this.amount = amount;
      this.isApplePayEnabled = applePayEnabled;
      this.isGooglePayEnabled = googlePayEnabled;
      this.merchantId = merchantId;
      this.merchantName = merchantDisplayName;
      this.domain = domain;
      this.googleId = googleId;
      this.googleAuthJwt = authJwt;
      this.isPayPalEnabled = paypalEnabled;
      this.isPayPalPayLaterEnabled = paypalPayLaterEnabled;
      this.isVenmoEnabled = venmoEnabled;
      this.paypalClientId = paypalClientId;
      this.paypalMerchantId = paypalMerchantId;
      this.paypalBNCode = paypal_bn_code;
      this.pazeClientId = pazeClientId;
      this.pazeJsSdkUrl = pazeJsSdkUrl;
      this.pazeMerchantName = pazeMerchantName;
      this.pazeMCC = mccCode;
      this.isPazeEnabled = pazeEnabled;
      this.sessionId = sessionId;
      this.skipSellerStatusCheck = skipSellerStatusCheck;
      this.generateToken = generateToken;
      this.chariotConnectId = chariotConnectId;
      this.isChariotEnabled = chariotEnabled;
      this.chariotJsSdkUrl = chariotJsSdkUrl;
      this.baseUrl = baseUrl;
      this.chariotApplicationFee = chariotApplicationFee;
      this.applePaytokenNotificationURL = applePaytokenNotificationURL;
      this.applePayJsSdkUrl = applePayJsSdkUrl;
      this.applePayMerchantIdentifier = applePayMerchantIdentifier;
      if (applePayButtonStyle) {
        this.applePayButtonStyle = applePayButtonStyle;
      }

      if (googlePayButtonStyle) {
        this.googlePayButtonStyle = googlePayButtonStyle;
      }

      if (emailRequired === false) {
        this.emailRequired = false;
      }

      if (paypalFundingSource) {
        this.paypalFundingSource = paypalFundingSource;
      }

      if (customer) {
          this.customer = customer;
      }

      if (ach) {
        this.ach = ach;
      }

      if (hasCC) {
        this.hasCC = hasCC;
      }

        if (recurring) {
            const {description, startDate, endDate, frequency, intervals, managementUrl, billingAgreement} = recurring;
            this.description = description;
            this.startDate = startDate;
            this.endDate = endDate;
            this.frequency = frequency.toLowerCase();
            this.intervals = intervals;
            this.managementUrl = managementUrl;
            this.billingAgreement = billingAgreement;
            this.isRecurring = true;
            this.isApplePayEnabled = false;
            this.isGooglePayEnabled = false;
            this.isPayPalEnabled = false;
            this.isPazeEnabled = false;
            this.isChariotEnabled = false;
      } else {
        this.isRecurring = false;
      }
      return this;
    });

     if (disbursement.length > 0) {
         this.disbursement = disbursement;
      }
    },


  /**
   * Add payment lifecycle event handlers
   * @param {{
   * onTxnAuthorized: (gateway: string, data: any) => {},
   * onTxnSuccess: (gateway: string, data: any) => {} , 
   * onTxnFailed: (gateway: string, data: any) => {} ,
   * onValidationError: (gateway: string, errors: any) => {},
   * onTokenSuccess: (gateway: string, data: any, paymentDetailType: any) => {},
   * onTokenFailed: (gateway: string, errors: any, paymentDetailType: any) => {},
   * onCancel: (gateway: string, errors: any) => {}}} { onTxnAuthorized, onTxnSuccess, onTxnFailed, onValidationError } 
   * @return DigitalWalletsPay
   */
  setEventHandlers({onTxnAuthorized, onTxnSuccess, onTxnFailed, onValidationError, onCancel,onTokenSuccess,onTokenFailed}) {

    //REQUIRED EVENT HANDLERS FOR TXNS, CLIENT MUST HAVE THESE SET UP IN INIT FUNCTION ON THEIR PAGE
    if (typeof onValidationError !== 'function') {
      console.warn('onValidationError event handler is not a function');
    } else {
      this.onValidationError = onValidationError;
    }

    if (typeof onCancel !== 'function') {
      console.warn('onCancel is not defined. Ignore for digitalwallets');
    } else {
      this.onCancel = onCancel;
    }

    if (typeof onTxnSuccess !== 'function') {
      throw Error('onTxnSuccess is not a function');
    }

    this.onTxnSuccess = onTxnSuccess;

    if (typeof onTxnFailed !== 'function') {
      throw Error('onTxnFailed is not a function');
    }
    
    this.onTxnFailed = onTxnFailed;


    //OPTIONAL EVENT HANDLERS BASED ON THE FEATURE BEING USED
    if (this.skipCompleteAuthorization) {
      if (typeof onTxnAuthorized !== 'function') {
        throw Error('onTxnAuthorized is not a function');
      }
      this.onTxnAuthorized = onTxnAuthorized;
    }

    if(this.generateToken){
      if (typeof onTokenSuccess !== 'function') {
        throw Error('onTokenSuccess is not a function');
      }
  
      this.onTokenSuccess = onTokenSuccess;
  
      if (typeof onTokenFailed !== 'function') {
        throw Error('onTokenFailed is not a function');
      }
      
      this.onTokenFailed = onTokenFailed;  
    }

    return this;
  },

  /**
   * Check and Set whether ApplePay is available
   * @return {void} void
   */
  async checkApplePayAvailability() {
    if (window.ApplePaySession == undefined) {
      console.warn('Applepay SDK is not loaded');
    } else if (!ApplePaySession.canMakePayments()) {
      console.warn('Applepay is not available for this device');
    }
    this.isApplePayAvailable = window.ApplePaySession != undefined && ApplePaySession.canMakePayments();

    try {
        const capabilities = await ApplePaySession.applePayCapabilities(this.applePayMerchantIdentifier);

        console.log('Apple Pay capabilities:', capabilities);

    } catch (error) {
        console.warn('applePayCapabilities failed, falling back to canMakePayments', error);
    }
  },
    isInIframe() {
        try {
            return window.self !== window.top;

        } catch (e) {
            throw e; 
        }
    },
    getParentOrigin() {
        try {

            const referrer = document.referrer;
            const hostname = referrer ? new URL(referrer).hostname : "";

            return hostname;

        } catch (e) {
            if (e instanceof DOMException && e.name === "SecurityError") {
                return "";
            }
            throw e;
        }
    },

  /**
   * Render if apple pay is enabled and available
   * @return {void} void
   */
    async initializeApplePay() {
        await  this.checkApplePayAvailability();
      if (this.isInIframe()) {
          this.parentHostName = this.getParentOrigin();
      }
    if (this.showApplePayButton == 'always' || this.isApplePayAvailable) {
        const div = document.getElementById('apple-button-wrapper');
        div.style.width = this.walletswidth;
        div.style.height = this.walletsheight;
      const applePayBtn = document.createElement('apple-pay-button');
      applePayBtn.setAttribute('buttonstyle', this.walletButtonTheme);
      applePayBtn.setAttribute('type', this.applePayButtonStyle);
      applePayBtn.setAttribute('locale', 'en');
      applePayBtn.style.display = 'initial';

      applePayBtn.addEventListener('click', () => {
        if (this.amount == 0) {
          this.onValidationError("ApplePay", {field: 'amount', message: 'JWT amount is Zero'});
          return;
        }

        const request = {
          countryCode: this.countryCode,
          currencyCode: this.currencyCode,
          merchantCapabilities: this.merchantCapabilities,
          supportedNetworks: this.getAppleSupportedNetWorks(),
          requiredBillingContactFields: ['email', 'name', 'phone', 'postalAddress'],
          requiredShippingContactFields: ['email', 'phone'],
          total: {
            label: this.merchantName,
            type: 'final',
            amount: this.amount,
          }
        };

        if (this.isRecurring) {
          if (!['annually', 'monthly', 'daily'].includes(this.frequency)) {
            this.onTxnFailed('ApplePay', {code: 400, message: 'recurring frequency is not valid for applepay'});
            return;
          }

          let frequency = '';
          if(this.frequency == 'annually') {
            frequency = 'year';
          }
    
          if (this.frequency == 'monthly') {
            frequency = 'month';
          }
    
          if (this.frequency == 'daily') {
            frequency = 'day';
          }

          request.recurringPaymentRequest = {
            paymentDescription: this.description,
            regularBilling: {
              label: 'Subscription',
              amount: this.amount,
              type: 'final',
              paymentTiming: 'recurring',
              recurringPaymentStartDate: new Date(this.startDate),
              recurringPaymentIntervalUnit: frequency,
              recurringPaymentIntervalCount: this.intervals,
              recurringPaymentEndDate: new Date(this.endDate),
            },
            billingAgreement: this.billingAgreement,
            managementURL: this.managementUrl,
            tokenNotificationURL: this.applePaytokenNotificationURL
        };
        }

        this.applePaySession = new ApplePaySession(3, request);
  
        this.applePaySession.onvalidatemerchant = ({ validationURL }) => {
          fetch(`${this.baseUrl}/applepay/createSession`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ParentOrigin': this.parentHostName
            },
            body: JSON.stringify({ validationUrl: validationURL, jwt: this.jwt }),
          })
            .then(async (res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw await res.json();
              }
            })
            .then((session) => {
              this.applePaySession.completeMerchantValidation(session);
            })
            .catch((error) => {
              console.log("Payment session creation failed: ", error);
              this.onTxnFailed('ApplePay', error);
            });
        };
  
        this.applePaySession.onpaymentauthorized = ({ payment }) => {

          if (this.skipCompleteAuthorization) {
            this.applePaySession.completePayment({ status: ApplePaySession.STATUS_SUCCESS });
            this.onTxnAuthorized('ApplePay', { ...payment, jwt: this.jwt, url: `${this.baseUrl}/applepay/complete`});
            return;
          }

           fetch(`${this.baseUrl}/applepay/complete`, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain',
            },
              body: JSON.stringify({ ...payment, jwt: this.jwt, emailAddress: this.customer.email }),
          })
            .then(async (res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw await res.json();
              }
            })
            .then((data) => {
              console.log("Payment authorized: ", data);
              this.applePaySession.completePayment({ status: ApplePaySession.STATUS_SUCCESS });
              this.onTxnSuccess('ApplePay', data);
            })
            .catch((error) => {
              console.log("Payment authorization failed: ", error);
              this.applePaySession.completePayment({ status: ApplePaySession.STATUS_FAILURE });
              this.onTxnFailed('ApplePay', error);
            });
        };
  
        this.applePaySession.oncancel = (error) => {
          console.log("Payment cancelled: ", error);
          this.onTxnFailed('ApplePay', error);
        };
  
        this.applePaySession.begin();
      });

      div.appendChild(applePayBtn);
    } else {
      document.getElementById('apple-button-wrapper').remove();
    }
  },

  onPaymentAuthorized({ email, paymentMethodData }) {
    const { token } = paymentMethodData.tokenizationData;
    const { billingAddress } = paymentMethodData.info;
    const payerInfo = { email, billingAddress };
      this.showLoader();
      
    return new Promise((resolve, reject) => {

      if (this.skipCompleteAuthorization) {
        this.onTxnAuthorized('GooglePay', { token, payerInfo, jwt: this.jwt , url: `${this.baseUrl}/googlepay/complete`});
        resolve({transactionState: 'SUCCESS'});
        this.hideLoader();
        return;
      }

      fetch(`${this.baseUrl}/googlepay/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
          body: JSON.stringify({ token, emailAddress:this.customer.email, billingAddress, jwt: this.jwt}),
      }).then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw await res.json();
        }
      })
      .then((data) => {
        console.log('=== GooglePay succeeded ===', data);
        this.onTxnSuccess('GooglePay', data);
        resolve({transactionState: 'SUCCESS'});
      })
      .catch((err) => {
        console.log('=== GooglePay failed ===', err);
        resolve({
          transactionState: 'ERROR',
          error: {
            intent: 'PAYMENT_AUTHORIZATION',
            message: JSON.stringify(err),
            reason: 'PAYMENT_DATA_INVALID'
          }
        });

        this.onTxnFailed('GooglePay', err);
      }).finally(() => {
        this.hideLoader();
      });
    });
  },

  initializeGooglePay() {
    
    const baseRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      emailRequired: true
    };

    const baseCardPaymentMethod = {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: this.allowedCardAuthMethods,
        allowedCardNetworks: this.getGooglePaySupportedNetworks(),
        billingAddressRequired: true,
        billingAddressParameters: {
          format: 'FULL',
          phoneNumberRequired: true
        }
      }
    };

    const tokenizationSpecification = {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        gateway: this.googlePayGateway,
        gatewayMerchantId: `${this.merchantId}`,
      }
    };

    const cardPaymentMethod = {
      ...baseCardPaymentMethod,
      tokenizationSpecification,
    };

    const isReadyToPayRequest = {
      ...baseRequest,
      allowedPaymentMethods: [baseCardPaymentMethod],
    };

    if (window.google) {
      this.googlePayPaymentsClient = new google.payments.api.PaymentsClient({
        environment: this.googlePayEnv,
        paymentDataCallbacks: {
          onPaymentAuthorized: (data) => this.onPaymentAuthorized(data)
        }
      });
  
      this.googlePayPaymentsClient.isReadyToPay(isReadyToPayRequest)
        .then((response) => {
          if (response.result) {
            const googlePayBtn = this.googlePayPaymentsClient.createButton({
              buttonColor: this.walletButtonTheme,
              onClick: ()=> {
                if (this.amount == 0) {
                  this.onValidationError('GooglePay', {field: 'amount', message: 'JWT amount is Zero'});
                  return;
                }
                const paymentDataRequest = {
                  ...baseRequest,
                  allowedPaymentMethods: [cardPaymentMethod],
                  transactionInfo: {
                    totalPriceStatus:  'FINAL',
                    totalPrice: `${this.amount}`,
                    currencyCode: this.currencyCode,
                    countryCode: this.countryCode,
                    totalPriceLabel: 'Total'
                  },
                  merchantInfo: {
                    merchantId: `${this.googleId}`,
                    merchantName: this.merchantName,
                    merchantOrigin: this.domain,
                    authJwt: this.googleAuthJwt,
                  },
                  callbackIntents: ["PAYMENT_AUTHORIZATION"],
                  emailRequired: this.emailRequired,
                };
                this.googlePayPaymentsClient.loadPaymentData(paymentDataRequest);
              },
              allowedPaymentMethods: [cardPaymentMethod],
              buttonSizeMode: 'fill',
              buttonType: this.googlePayButtonStyle,
            });
  
            const div = document.getElementById('google-button-wrapper');
            const container = document.createElement('div');
            container.id = 'googlepay-container';
            let width = parseInt(this.walletswidth.slice(0, -2));
            if (width < 240) {
              width = 240;
            }
            container.style.width = `${width}px`;
            container.style.height = this.walletsheight;
            container.appendChild(googlePayBtn);
            div.appendChild(container);
          }
        })
        .catch((err) => {
          console.log('=== GooglePay failed ===', err);
          this.onTxnFailed('GooglePay', err);
        });
    } else {
      console.warn('Googlepay SDK is not loaded');
    }
  },

  initializePaypal() {
    const div = document.getElementById('paypal-button-wrapper');
    const container = document.createElement('div');
    container.id = 'paypal-container';
    container.style.width = this.walletswidth;
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    div.appendChild(container);
    
    let height = parseInt(this.walletsheight.substring(0, 2));
    height = height > 55 ? 55 : height;

    if (this.isRecurring) {
      if (this.paypalPlanId) {
        paypal.Buttons({
          style: { height, disableMaxWidth: true },
          createSubscription: (data, actions) => actions.subscription.create({
              'plan_id': this.paypalPlanId,
          }),
          onApprove: (data, actions) => {
            return fetch(`${this.baseUrl}/paypal/capture-subscription`, {
              method: 'POST',
              body: JSON.stringify({
                jwt: this.jwt,
                ...data,
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(async (res) => {
              if (res.ok) {
                return res.json();
              } else {
                const payload = await res.text();
                const error = {
                    status: res.status,
                    statusText: res.statusText,
                    payload
                };
                throw error;
              }
            })
            .then((data) => {
              this.onTxnSuccess('Paypal', data);
            })
            .catch((error) => {
              console.log("Paypal Subscription capture failed: ", error);
              this.onTxnFailed('Paypal', error);
              throw error;
            });
          },
          onCancel: (data) => {
            this.onCancel("Paypal", data);
          },
          onError: (error) => {
            this.onTxnFailed("Paypal", error);
          }
        })
        .render('#paypal-container');
      }
    } else {
      paypal.Buttons({
          style: { height, disableMaxWidth: true },
        createOrder: (data, actions) => {
          return fetch(`${this.baseUrl}/paypal/create`, {
            method: 'POST',
            body: JSON.stringify({ 
              amount: this.amount,
              currency: this.currencyCode,
              jwt: this.jwt,
              source: data.paymentSource
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(async (res) => {
            if (res.ok) {
              return res.json();
            } else {
              const payload = await res.text();
              const error = {
                status: res.status,
                statusText: res.statusText,
                payload
              };
              throw error;
            }
          })
          .then((order) => order.id)
          .catch((error) => {
            console.log("Paypal Transaction creation failed: ", error);
            this.onTxnFailed('Paypal', error);
            throw error;
          });
        },
        onApprove: (data, actions) => {
          if (this.skipCompleteAuthorization) {
            return fetch(`${this.baseUrl}/paypal/get-order`, {
                method: 'POST',
                body: JSON.stringify({
                    jwt: this.jwt,
                    order_id: data.orderID
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(async (res) => {
                if (res.ok) {
                  return res.json();
                } else {
                  const payload = await res.text();
                  const error = {
                    status: res.status,
                    statusText: res.statusText,
                    payload
                  };
                  throw error;
                }
            })
            .then(({ payer, purchase_units }) => {
                return this.onTxnAuthorized('Paypal', { ...data, payer, purchase_units, jwt: this.jwt, url: `${this.baseUrl}/paypal/capture`});
            })
            .catch((error) => {
                console.log("Paypal Transaction Authorization failed: ", error);
                this.onTxnFailed('Paypal', error);
                throw error;
            });
          }
          return fetch(`${this.baseUrl}/paypal/capture`, {
            method: 'POST',
            body: JSON.stringify({
              jwt: this.jwt,
              transactionId: data.orderID,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(async (res) => {
            if (res.ok) {
              return res.json();
            } else {
              const payload = await res.text();
              const error = {
                  status: res.status,
                  statusText: res.statusText,
                  payload
              };
              throw error;
            }
          })
          .then((data) => {
            this.onTxnSuccess('Paypal', data);
          })
          .catch((error) => {
            console.log("Paypal Transaction capture failed: ", error);
            this.onTxnFailed('PAYPAL', error);
            throw error;
          });
        },
        onCancel: (data) => {
            this.onCancel("Paypal", data);
        },
        onError: (error) => {
            this.onTxnFailed("Paypal", error);
        }
      })
      .render('#paypal-container');
    }
  },

  async initializePaze() {
    this.pazeClient = window.DIGITAL_WALLET_SDK;
    await this.pazeClient.initialize({
      client: { id: this.pazeClientId, name: this.pazeMerchantName}
    });

    if (this.customer.email) {
      const { consumerPresent } = await this.pazeClient.canCheckout({
        emailAddress: this.customer.email
      });

      // Do not show paze button if email exists and not valid
      if (!consumerPresent) {
        return;
      }
    }

    const button = document.createElement('button');
    button.textContent = 'Paze';
    button.style = `width:${this.walletswidth};height:${this.walletsheight};border-radius:4px;border:none;font-weight:bold;font-style:italic;background-color:blue;color:white;`;

    button.onclick = async () =>{
      try {
        const { result, checkoutResponse } = await this.pazeClient.checkout({
          sessionId: this.sessionId,
          actionCode: 'START_FLOW',
          transactionValue: {
            transactionCurrencyCode: this.currencyCode,
            transactionAmount: `${Number(this.amount).toFixed(2)}`
          },
          enhancedTransactionData: {
            cartContainsGiftCard: false,
            orderForPickup: false,
            orderQuantity: '1',
          },
          shippingPreference: 'ALL',
          billingPreference: 'ALL'
        });

        if (result == 'COMPLETE') {
          const checkoutRes = await fetch(`${this.baseUrl}/paze/checkout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId: this.sessionId, payload: checkoutResponse, jwt: this.jwt }),
          })

          if (!checkoutRes.ok) {
            console.log("Paze Checkout Response Processing failed: ", checkoutRes.status);
            throw new Error(checkoutRes)
          }

          const checkoutData = await checkoutRes.json();

          const { completeResponse } = await this.pazeClient.complete({
            sessionId: this.sessionId,
            transactionType: 'PURCHASE',
            transactionOptions: {
              merchantCategoryCode: this.pazeMCC,
              billingPreference: 'ALL',
              payloadTypeIndicator: 'PAYMENT',
            },
            transactionValue: {
              transactionCurrencyCode: this.currencyCode,
              transactionAmount: `${Number(this.amount).toFixed(2)}`,
            },
            enhancedTransactionData: {
              cartContainsGiftCard: false,
              orderForPickup: false,
              orderQuantity: '1',
            },
          });

          const completeRes = await fetch(`${this.baseUrl}/paze/complete`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
            body: JSON.stringify({ sessionId: checkoutData.sessionId, payload: completeResponse, jwt: this.jwt }),
          });

          if (!completeRes.ok) {
            console.log("Paze Complete Response Processing failed: ", completeRes.status);
            throw new Error(completeRes)
          }

          const completeData = await completeRes.json();
          this.onTxnSuccess('PAZE', completeData);
        } else {
          this.onTxnFailed('PAZE', 'Uncompleted');
        }
      } catch (error) {
        console.log('Paze transaction failed: ', error);
        this.onTxnFailed('PAZE', error);
      }
    };
    const div = document.getElementById('paze-button-wrapper');
    div.append(button);
    },

    /**
     * 
     * @returns promise resolve or reject data for customer info.
     */
    getCustomerInfoFromEmbeddedSDK: function () {
        return new Promise((resolve, reject) => {
            const iframe = document.getElementById('payment-form');

            const origin = this.getChildOrigin();

            const handler = (event) => {
                if (event.origin !== origin) return;
                if (event.data?.event === 'CUSTOMER_INFO') {
                    window.removeEventListener('message', handler);
                    resolve(event.data.data);
                }
            };

            window.addEventListener('message', handler);

            iframe.contentWindow.postMessage({ event: 'GET_CUSTOMER_INFO' }, origin);
        });
    },

  initializeChariot() {
    const chariot = document.createElement('chariot-connect');
    chariot.id = 'chariot';
    chariot.setAttribute('cid', this.chariotConnectId);
    chariot.onDonationRequest( async () => {
        this.customer = document.getElementById('payment-form') != null ? await this.getCustomerInfoFromEmbeddedSDK() : this.customer; // get form cusotmer info from EmbeddedSDK       
      const data = { amount: parseInt(this.amount * 100) };
      if (this.customer) {
        const { firstName, lastName, email, billingAddress } = this.customer;
        if (firstName) {
          data.firstName = firstName;
        }
        if (lastName) {
          data.lastName = lastName;
        }
        if (email) {
          data.email = email;
        }
        if (billingAddress) {
          const { address, city, state, zipCode } = billingAddress;
          const addressData = {};
          if (address) {
            addressData.line1 = address;
          }
          if (city) {
            addressData.city = city;
          }
          if (state) {
            addressData.state = state;
          }
          if (zipCode) {
            addressData.postalCode = zipCode;
          }
          if (Object.keys(addressData).length > 0) {
            data.address = addressData;
          }
        }
      }
      return data;
    });
    chariot.addEventListener('CHARIOT_SUCCESS', ({ detail }) => {
      this.chariotSuccessDetail = detail; 
      return fetch(`${this.baseUrl}/chariot/grant`, {
        method: 'POST',
        body: JSON.stringify({ 
          jwt: this.jwt,
          workflowSessionId: detail.workflowSessionId,
          amount: detail.grantIntent.amount,
          country: this.customer?.billingAddress?.country,
          applicationFeeAmount: parseFloat((Number(this.chariotApplicationFee) * 100).toFixed(2))
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
          .then((data) => {
              if (data.ChariotResponse.status.toLowerCase() == 'initiated' || data.ChariotResponse.status.toLowerCase() == 'completed') {
        this.onTxnSuccess('Chariot', data);
      } else {
            this.onTxnFailed('Chariot', 'Unable to process the transaction');
      }
    })
      .catch((error) => {
        console.log("Chariot Transaction failed: ", error);
        this.onTxnFailed('Chariot', error);
      });
    });
    chariot.addEventListener('CHARIOT_EXIT', ({ detail }) => {
      this.onTxnFailed('Chariot', detail);
    });
    const div = document.getElementById('chariot-button-wrapper');
    div.append(chariot);
  },

  /**
   * Inject ApplePay SDK
   * @returns void
   */
  injectAppleSdk() {
    var js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('apple-sdk')){
      this.initializeApplePay();
      return;
    }
    js = document.createElement('script');
    js.id = 'apple-sdk';
    js.onload = () => this.initializeApplePay();
    js.src = this.applePayJsSdkUrl;
    fjs.parentNode.insertBefore(js, fjs);
  },

  /**
   * Inject GooglePay SDK
   * @returns void
   */
  injectGooglePaySdk() {
    var js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('googlepay-sdk')){
      this.initializeGooglePay();
       return;
    }
    js = document.createElement('script');
    js.id = 'googlepay-sdk';
    js.onload = () => this.initializeGooglePay();
    js.src = "https://pay.google.com/gp/p/js/pay.js";
    fjs.parentNode.insertBefore(js, fjs);
  },

  /**
   * Inject Paypal SDK
   * @returns void
   */
  injectPaypalSdk() {
    var idToken = '';
    if(!this.skipSellerStatusCheck){
      console.log('Doing Seller Status Query..');
      fetch(`${this.baseUrl}/paypal/check-seller-status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jwt: this.jwt })
      })
      .then(async (res) => {
        if (res.ok) {
          return res.text()
        } else {
          throw await res.json();
        }
      })
      .then((data) => {
        fetch(`${this.baseUrl}/paypal/generate_userid_token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jwt: this.jwt })
          })
          .then(async (res) => {
            if (res.ok) {
              return res.text()
            } else {
              throw await res.json();
            }
          })
          .then((id_token) => {idToken = id_token;})})
    }
    var js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('paypal-sdk')){
      document.getElementById('paypal-sdk').remove();
    }
    js = document.createElement('script');
    js.id = 'paypal-sdk';
    js.onload = () => this.initializePaypal();
    js.setAttribute('data-partner-attribution-id', this.paypalBNCode);
    if(!!idToken)
      js.setAttribute('data-user-id-token', idToken);
    let url = `https://www.paypal.com/sdk/js?client-id=${this.paypalClientId}&merchant-id=${this.paypalMerchantId}&currency=USD`;

    if (this.isRecurring) {
      url += '&vault=true&intent=subscription';
    }

    const disabledSources = ['card'];
    if (!this.paypalFundingSource.includes('bnpl') || !this.isPayPalPayLaterEnabled) {
      disabledSources.push('paylater');
    }

    if (!this.paypalFundingSource.includes('paypal')) {
      disabledSources.push('paypal');
    }

    url += `&disable-funding=${disabledSources.join(',')}`;

    if (this.paypalFundingSource.includes('venmo') && this.isVenmoEnabled) {
      url += '&enable-funding=venmo';
    }

    js.src = url;
    fjs.parentNode.appendChild(js);
},
 

  /**
   * Inject Paze SDK
   * @return void
   */
   injectPazeSdk() {
    var js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('paze-sdk')){
      this.initializePaze();
       return;
    }
    js = document.createElement('script');
    js.id = 'paze-sdk';
    js.onload = () => this.initializePaze();
    js.src = `${this.pazeJsSdkUrl}?id=${this.pazeClientId}`;
    fjs.parentNode.insertBefore(js, fjs);
  },

  /**
   * Inject Chariot SDK
   * @return void
   */
  injectCharitSdk() {
    var js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('chariot-sdk')){
      this.initializeChariot();
       return;
    }
    js = document.createElement('script');
    js.id = 'chariot-sdk';
    js.onload = () => this.initializeChariot();
    js.src = this.chariotJsSdkUrl;
    fjs.parentNode.insertBefore(js, fjs);
  },

  /**
   * Format supportedNetworks for applepay
   * @return string[]
   */
  getAppleSupportedNetWorks() {
    const networks = [];

    for(const network of this.supportedNetworks) {
      const lowerCase = network.toLowerCase();
      if (lowerCase == 'mastercard') {
        networks.push('masterCard');
      } else if (['visa', 'amex', 'discover'].includes(lowerCase)) {
        networks.push(lowerCase);
      }
    }

    return networks;
  },

  /**
   * Format supportedNetworks for googlepay
   * @returns string[]
   */
  getGooglePaySupportedNetworks() {
    const networks = [];

    for(const network of this.supportedNetworks) {
      const upperCase = network.toUpperCase();
      networks.push(upperCase);
    }

    return networks;
  },

  /**
   * Render Payment Buttons in the container
   * @param {{containerId: string,  productsbgcolor: string, walletsbgcolor: string, productsfontcolor: string, borderRadius: string, padding: string, gap: string, width: string, height: string}} 
   * options
   * @return void
   */
  render(options) {
    const {
      containerId,
      productsbgcolor,
      walletsbgcolor,
      productsfontcolor,
      borderRadius,
      walletsborderradius,
      padding,
      walletspadding,
      gap,
      walletsgap,
      width,
      walletswidth,
      height,
      walletsheight,
      payBtnColor,
      paybuttoncolor,
      cancelBtnColor,
      cancelbuttoncolor,
      fontSize,
      productsfontsize,
      fontFamily,
      walletsfontfamily,
    } = options || {};

    if (containerId) {
      this.containerId = containerId;
    }

    const container = document.getElementById(this.containerId)

    if (!container) {
      throw Error(`Element with id '${this.containerId}' doesn't exist.`);
    }

    container.innerHTML = '';

    if (productsbgcolor) {
      this.productsbgcolor = productsbgcolor;
    }

      if (walletsbgcolor) {
          this.walletsbgcolor = walletsbgcolor;
      }

    if (productsfontcolor) {
      this.productsfontcolor = productsfontcolor;
    }

    if (borderRadius) {
      this.walletsborderradius = borderRadius;
    }

    if (walletsborderradius) {
      this.walletsborderradius = walletsborderradius;
    }

    if (padding) {
      this.walletspadding = padding;
    }

    if (walletspadding) {
      this.walletspadding = walletspadding;
    }

    if (gap) {
      this.walletsgap = gap;
    }

    if (walletsgap) {
      this.walletsgap = walletsgap;
    }

    if (width) {
      this.walletswidth = width;
    }

    if (walletswidth) {
      this.walletswidth = walletswidth;
    }

    if (height) {
      this.walletsheight = height;
    }

    if (walletsheight) {
      this.walletsheight = walletsheight;
    }

    if (payBtnColor) {
      this.paybuttoncolor = payBtnColor;
    }

    if (paybuttoncolor) {
      this.paybuttoncolor = paybuttoncolor;
    }

    if (cancelBtnColor) {
      this.cancelbuttoncolor = cancelBtnColor;
    }

    if (cancelbuttoncolor) {
      this.cancelbuttoncolor = cancelbuttoncolor;
    }

    if (fontSize) {
      this.fontSize = fontSize;
    }

    if (productsfontsize) {
      this.fontSize = productsfontsize;
    }

    if (fontFamily) {
      this.fontFamily = fontFamily;
    }

    if (walletsfontfamily) {
      this.fontFamily = walletsfontfamily;
      }

    if ((this.isApplePayEnabled || this.isGooglePayEnabled || this.isPayPalEnabled || this.isPazeEnabled || this.isChariotEnabled) && !this.generateToken) {

      const style = document.createElement('style');
      style.innerText = `apple-pay-button{--apple-pay-button-width:${this.walletswidth};--apple-pay-button-height:${this.walletsheight};--apple-pay-button-border-radius:3px;--apple-pay-button-padding:0px 0px;--apple-pay-button-box-sizing:border-box;} @-webkit-keyframes spin {0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg);}} @keyframes spin{ 0 %{transform: rotate(0deg);} 100% {transform:rotate(360deg);}}`;
      container.appendChild(style);

      const amountInput = document.createElement('input');
      amountInput.id = 'amount';
      amountInput.setAttribute('value', this.amount)
      amountInput.hidden = true;
      container.appendChild(amountInput);

      const div = document.createElement('div');
      div.id = 'payment-buttons';
      div.style = `display:flex;justify-content:center;gap:${this.walletsgap};padding:${this.walletspadding};border-radius:${this.walletsborderradius};background-color:${this.walletsbgcolor};display:inline-flex;position:relative;align-items:center;box-sizing:border-box;`;

      const loaderContainer = document.createElement('div');
      loaderContainer.id = 'loader-container';
      loaderContainer.style = 'position:absolute;width:100%;height:100%;top:0;left:0;z-index:10;background-color:rgba(0,0,0,.7);display:none;align-items:center;justify-content:center;';
      const loader = document.createElement('div');
      loader.id = 'loader';
      loader.style = `border: 5px solid #f3f3f3;border-top: 5px solid #555;border-radius:50%;width:30px;height:30px;animation: spin 2s linear infinite;`
      loaderContainer.appendChild(loader);
      div.appendChild(loaderContainer);

      container.appendChild(div);

      if (this.isPazeEnabled) {
        const paze = document.createElement('div');
        paze.id = 'paze-button-wrapper';
        div.appendChild(paze);
        this.injectPazeSdk();
      }

      if (this.isApplePayEnabled) {
        const apple = document.createElement('div');
        apple.id = 'apple-button-wrapper';
          div.appendChild(apple);
        if (this.donotloadthirdpartysdks) {
          // SDK is loaded by merchant
          this.initializeApplePay();
        } else {
          // SDK is not loaded by merchant
          this.injectAppleSdk();
        }
      }

      if (this.isGooglePayEnabled) {
        const google = document.createElement('div');
        google.id = 'google-button-wrapper';
        div.appendChild(google);
        if (this.donotloadthirdpartysdks) {
          // SDK is loaded by merchant
          this.initializeGooglePay();
        } else {
          // SDK is not loaded by merchant
          this.injectGooglePaySdk();
        }
      }

      if (this.isPayPalEnabled && this.paypalClientId) {
        const paypal = document.createElement('div');
        paypal.id = 'paypal-button-wrapper';
        div.appendChild(paypal);
        this.injectPaypalSdk();
      }

      if (this.isChariotEnabled) {
        const chariot = document.createElement('div');
        chariot.id = 'chariot-button-wrapper';
        div.appendChild(chariot);
        this.injectCharitSdk();
      }
    }
  },

  showLoader() {
    document.getElementById('loader-container').style.display = 'flex';
  },

  hideLoader() {
    document.getElementById('loader-container').style.display = 'none';
  },

  getChildOrigin() {
    if (this.baseUrl) {
      return new URL(this.baseUrl).origin;
    }
    return window.location.origin;
  }
};

const EmbeddedPayments = {
  ...DigitalWalletsPay,

  /**
   * @type {string} Pay buttons container id.
   */
  containerId: 'embeddedpayments',

  embedIframe() {
    const formContainer = document.getElementById('embedded-form-container');
    formContainer.style = 'display:flex;flex-direction:column';
    const iframe = document.createElement('iframe');
    iframe.id = 'payment-form';
    iframe.className = 'payment-form';
    iframe.style = this.generateToken ? 'min-height:300px;width:40%;' : 'min-height:300px;width:100%;';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');    
    iframe.src = `${this.baseUrl}/embedded/render?jwt=${this.jwt}&paybtncolor=${this.paybuttoncolor}&paybuttontext=${this.paybuttontext}
                  &cancelbtncolor=${this.cancelbuttoncolor}&fontsize=${this.fontSize}&fontfamily=${this.fontFamily}&paymentfontfamily=${this.paymentfontfamily}
                  &paymentpanelstyle=${this.paymentpanelstyle}&paymentpanelcolor=${this.paymentpanelcolor}
                  &paymentfontcolor=${this.paymentfontcolor}&paymentlabelcolor=${this.paymentlabelcolor}&paymentphcolor=${this.paymentphcolor}
                  &paymentinputcolor=${this.paymentinputcolor}&origin=${window.location.origin}
                  &supportednetworks=${this.supportedNetworks.join(',').toLowerCase()}
                  &paymentmethods=${this.paymentMethods.join(',').toLowerCase()}`
                  .replace(/\#/g, '%23');
                  
    formContainer.appendChild(iframe);

    window.addEventListener('message', ({ data }) => {
      const { event, payload, paymentDetailType } = data;

      if (event == 'CARD_TXN_SUCCESS') {
        this.onTxnSuccess('CARD', payload);
      } else if (event == 'CARD_TXN_FAILED') {
        this.onTxnFailed('CARD', payload);
      } else if (event == 'CANCEL') {
        this.onCancel('Card');
        iframe.remove();
        document.getElementById(this.containerId).innerHTML = '';
      } else if (event == 'RESIZE_IFRAME') {
        iframe.style.height = `${payload.height}px`;
      } else if (event == 'VALIDATION_FAILED') {
        this.onValidationError('CARD', payload)
      }
      else if(event == 'TOKEN_SUCCESS'){
        this.onTokenSuccess('Add Payment Details on File Result', payload, paymentDetailType);
      }
      else if(event == 'TOKEN_FAILED'){
        this.onTokenFailed('Add Payment Details on File Result', payload, paymentDetailType);
      }
    });
  },

  renderProdPanel(input) {
    const url = `${this.baseUrl}/embedded/product-panel?jwt=${this.jwt}&paybtncolor=${this.paybuttoncolor}&cancelbtncolor=${this.cancelbuttoncolor}&fontsize=${this.fontSize}&fontfamily=${this.fontFamily}&productsbgcolor=${this.productsbgcolor}&productsfontcolor=${this.productsfontcolor}`.replace(/\#/g, '%23');
    fetch(url)
      .then(res => res.text())
      .then((data) => {
        var div = document.createElement('div');
        div.innerHTML = data.trim();
        input.parentNode.insertBefore(div.firstChild, input.nextSibling);
      });
  },

  /**
 * Render Payment Buttons in the container
 * @param {{containerId: string,  productsbgcolor: string, walletsbgcolor: string, productsfontcolor: string, borderRadius: string, padding: string, gap: string, width: string, height: string}} 
 * options
 * @return void
 */
  render(options) {
    const {
      containerId,
      productsbgcolor,
      productsfontcolor,
      walletsbgcolor,
      walletsfontcolor,
      borderRadius,
      walletsborderradius,
      padding,
      walletspadding,
      gap,
      walletsgap,
      width,
      walletswidth,
      height,
      walletsheight,
      payBtnColor,
      paybuttoncolor,
      paybuttontext,
      cancelBtnColor,
      cancelbuttoncolor,
      fontSize,
      productsfontsize,
      fontFamily,
      walletsfontfamily,
      paymentpanelstyle,
      paymentpanelcolor,
      paymentfontcolor,
      paymentinputcolor,
      paymentlabelcolor,
      paymentphcolor,
      paymentfontfamily

    } = options || {};

    if (containerId) {
      this.containerId = containerId;
    }

    const container = document.getElementById(this.containerId);

    if (!container) {
      throw Error(`Element with id '${this.containerId}' doesn't exist.`);
    }

    container.classList.add('embedded-payment');
    container.innerHTML = '';


    let panelcolor, inputcolor, fontcolor, labelcolor, phcolor;

      if (paymentpanelstyle === 'light') {
          panelcolor = '#f9f9f9';
          inputcolor = '#F1F2F6';
          fontcolor = '#000000';
          labelcolor = '#000000';
          phcolor = '#778195';
      }
      else if (paymentpanelstyle === 'dark') {
          panelcolor = '#000000';
          inputcolor = '#212B36';
          fontcolor = '#FFFFFF';
          labelcolor = '#FFFFFF';
          phcolor = '#778195';
      }
      else {
          panelcolor = paymentpanelcolor?.trim() || '#f9f9f9';
          inputcolor = paymentinputcolor?.trim() || '#F1F2F6';
          fontcolor = paymentfontcolor?.trim() || '#000000';
          labelcolor = paymentlabelcolor?.trim() || '#000000';
          phcolor = paymentphcolor?.trim() || '#778195';
      }

    if (paymentpanelstyle) {
      this.paymentpanelstyle = paymentpanelstyle;
      }

    if (paymentpanelcolor) {
        this.paymentpanelcolor = panelcolor;
    }

    if (paymentfontcolor) {
        this.paymentfontcolor = fontcolor;
    }

    if (paymentinputcolor) {
        this.paymentinputcolor = inputcolor;
    }

    if (paymentlabelcolor) {
        this.paymentlabelcolor = labelcolor;
    }

    if (paymentphcolor) {
        this.paymentphcolor = phcolor;
    }

    if (productsbgcolor) {
      this.productsbgcolor = productsbgcolor;
    }

    if (productsfontcolor) {
      this.productsfontcolor = productsfontcolor;
    }
    
    if (walletsbgcolor) {
        if (paymentpanelcolor) {
            this.walletsbgcolor = panelcolor;
        }
        else {
            this.walletsbgcolor = walletsbgcolor;
        }
      }
      else {
          this.walletsbgcolor = panelcolor;
      }

      if (walletsfontcolor) {
          this.walletsfontcolor = walletsfontcolor;
      }
      else {
          this.walletsfontcolor = labelcolor;
      }

    if (borderRadius) {
      this.walletsborderradius = borderRadius;
    }

    if (walletsborderradius) {
      this.walletsborderradius = walletsborderradius;
    }

    if (padding) {
      this.walletspadding = padding;
    }

    if (walletspadding) {
      this.walletspadding = walletspadding;
    }

    if (gap) {
      this.walletsgap = gap;
    }

    if (walletsgap) {
      this.walletsgap = walletsgap;
    }

    if (width) {
      this.walletswidth = width;
    }

    if (walletswidth) {
      this.walletswidth = walletswidth;
    }

    if (height) {
      this.walletsheight = height;
    }

    if (walletsheight) {
      this.walletsheight = walletsheight;
    }

    if (payBtnColor) {
      this.paybuttoncolor = payBtnColor;
    }

    if (paybuttoncolor) {
      this.paybuttoncolor = paybuttoncolor;
    }

    if (paybuttontext && ['Pay', 'Donate'].includes(paybuttontext.trim())) {
      this.paybuttontext = paybuttontext
    }
    else {
        this.paybuttontext = 'Pay';
    }

    if (cancelBtnColor) {
      this.cancelbuttoncolor = cancelBtnColor;
    }

    if (cancelbuttoncolor) {
      this.cancelbuttoncolor = cancelbuttoncolor;
    }

    if (fontSize) {
      this.fontSize = fontSize;
    }

    if (productsfontsize) {
      this.fontSize = productsfontsize;
    }

    if (walletsfontfamily) {
       if (paymentfontfamily) {
           this.fontFamily = paymentfontfamily;
       }
       else {
           this.fontFamily = walletsfontfamily;
       }
    }
      else {
          this.fontFamily = paymentfontfamily;
      }

    this.walletButtonTheme = this.getWalletButtonTheme(this.walletsbgcolor);

    const amountInput = document.createElement('input');
    amountInput.id = 'amount';
    amountInput.setAttribute('value', this.amount)
    amountInput.hidden = true;
    container.appendChild(amountInput);

    const formContainer = document.createElement('div');
    formContainer.id = 'embedded-form-container';
    formContainer.className = 'embedded-form-container';
    container.appendChild(formContainer);

      this.renderProdPanel(amountInput);

    if ((this.isApplePayEnabled || this.isGooglePayEnabled || this.isPayPalEnabled || this.isPazeEnabled || this.isChariotEnabled) && !this.generateToken) {

      const style = document.createElement('style');
      style.innerText = `apple-pay-button{--apple-pay-button-width:${this.walletswidth};--apple-pay-button-height:${this.walletsheight};--apple-pay-button-border-radius:3px;--apple-pay-button-padding:0px 0px;--apple-pay-button-box-sizing:border-box;} @-webkit-keyframes spin {0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg);}} @keyframes spin{ 0 %{transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .divider::before, .divider::after {content: '';position:relative;width:40%;border-block-start:1px dotted transparent;border-block-start-color: ${this.walletsfontcolor};border-block-end:0;transform:translateY(50%);} @media screen and (max-width:799px){#payment-buttons {flex-direction: column;}} `;
      container.appendChild(style);

      const wallet = document.createElement('div');
      wallet.id = 'wallet';
      wallet.className = 'wallet';

      const div = document.createElement('div');
      div.id = 'payment-buttons';
      div.style = `display:flex;justify-content:space-between;gap:${this.walletsgap};padding:${this.walletspadding};background-color:${this.walletsbgcolor};display:inline-flex;position:relative;width:100%;align-items:center;flex-direction:column;box-sizing:border-box;`;

      const loaderContainer = document.createElement('div');
      loaderContainer.id = 'loader-container';
      loaderContainer.style = 'position:absolute;width:100%;height:100%;top:0;left:0;z-index:10;background-color:rgba(0,0,0,.7);display:none;align-items:center;justify-content:center;';
      const loader = document.createElement('div');
      loader.id = 'loader';
      loader.style = `border: 5px solid #f3f3f3;border-top: 5px solid #555;border-radius:50%;width:30px;height:30px;animation: spin 2s linear infinite;`
      loaderContainer.appendChild(loader);
      div.appendChild(loaderContainer);

      wallet.appendChild(div);

      formContainer.appendChild(wallet);

      if (this.isPazeEnabled) {
        const paze = document.createElement('div');
        paze.id = 'paze-button-wrapper';
        div.appendChild(paze);
        this.injectPazeSdk();
      }

      if (this.isApplePayEnabled) {
        const apple = document.createElement('div');
        apple.id = 'apple-button-wrapper';
        div.appendChild(apple);
        if (this.donotloadthirdpartysdks) {
          // SDK is loaded by merchant
          this.initializeApplePay();
        } else {
          // SDK is not loaded by merchant
          this.injectAppleSdk();
        }
      }

      if (this.isGooglePayEnabled) {
        const google = document.createElement('div');
        google.id = 'google-button-wrapper';
        div.appendChild(google);
        if (this.donotloadthirdpartysdks) {
          // SDK is loaded by merchant
          this.initializeGooglePay();
        } else {
          // SDK is not loaded by merchant
          this.injectGooglePaySdk();
        }
      }

      if (this.isPayPalEnabled) {
        const paypal = document.createElement('div');
        paypal.id = 'paypal-button-wrapper';
        div.appendChild(paypal);
        this.injectPaypalSdk();
      }

      if (this.isChariotEnabled) {
        const chariot = document.createElement('div');
        chariot.id = 'chariot-button-wrapper';
        div.appendChild(chariot);
        this.injectCharitSdk();
      }
    }

    if (this.ach || this.hasCC) {
      if ((this.isApplePayEnabled || this.isGooglePayEnabled || this.isPayPalEnabled || this.isPazeEnabled) && !this.generateToken) {
          //We only need this divider in the form if there are wallets enabled.
          const divider = document.createElement('div');
          divider.id = 'divider';
          divider.innerHTML = `<span style="font-size:12px;font-weight:bold;padding:0 1rem;color:${this.walletsfontcolor};font-family:${this.fontFamily};">OR</span>`;
          divider.style = `display:flex;align-items:center;justify-content:center;padding:10px 0;background-color:${this.walletsbgcolor};`;
          divider.className = 'divider';
          wallet.appendChild(divider);
        }
        this.embedIframe();
    }

  },

  /**
   * Process iframe payment
   * @param {string} jwt
   * @return void
   */
  pay(jwt) {
    const iframe = document.getElementById('payment-form');
    const iframeContent = iframe.contentWindow || iframe.contentDocument;
    iframeContent.postMessage({ event: 'PAY', jwt }, this.getChildOrigin());   
  }
};