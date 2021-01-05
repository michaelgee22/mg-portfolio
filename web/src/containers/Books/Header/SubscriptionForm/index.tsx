export const SubscriptionForm = () => {
  return (
    <>
      <form
        action="https://app.convertkit.com/forms/1902888/subscriptions"
        method="post"
        data-sv-form="1902888"
        data-uid="f4adac1697"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <ul data-element="errors" data-group="alert" />

          <div data-element="fields" data-stacked="false">
            <input
              aria-label="First Name"
              name="fields[first_name]"
              required={true}
              placeholder="First Name"
              type="text"
            />

            <input
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required={true}
              type="email"
            />

            <button data-element="submit">
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </form>

      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
    </>
  )
}
