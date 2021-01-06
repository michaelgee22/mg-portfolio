import { Button, Flex, Icon, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiAtSign } from 'react-icons/fi'

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
      >
        <div data-style="clean">
          <ul data-element="errors" data-group="alert" />

          <Flex maxW="600px" m="8px auto" data-element="fields" data-stacked="false">
            <InputGroup m="0 8px">
              <InputLeftElement children={<Icon as={FaRegUserCircle} />} />

              <Input
                type="text"
                name="fields[first_name]"
                placeholder="First Name"
                aria-label="First Name"
                required={true}
              />
            </InputGroup>

            <InputGroup m="0 8px">
              <InputLeftElement children={<Icon as={FiAtSign} />} />

              <Input
                type="email"
                name="email_address"
                placeholder="Email Address"
                aria-label="Email Address"
                required={true}
              />
            </InputGroup>
          </Flex>

          <Button data-element="submit">Subscribe</Button>
        </div>
      </form>

      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
    </>
  )
}
