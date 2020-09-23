import React, { useEffect, useLayoutEffect } from 'react';
import Section from '../../../components/section/section';
import Content from '../../../content/landing-page.content';
import { setupEmail } from '../../../static/go-daddy-email.js';

const content = Content.email;

const EmailSection = () => {
  useLayoutEffect(() => {
    setupEmail(global);
  }, []);

  return (
    <Section id="email" className="pt-4">
      <form
        id="ema_signup_form"
        target="_blank"
        action="https://gem.godaddy.com/signups/subscribe/461bb87b3884467bb468a26283c97372"
        acceptCharset="UTF-8"
        method="post"
      >
        <input name="utf8" type="hidden" value="✓" />
        <div className="mimi_field required w-4/5 m-auto flex flex-col max-w-lg">
          <label htmlFor="signup_email" className="text-center">
            {content.title}
          </label>
          <br />
          <div className="flex flex-col md:flex-row">
            <input
              className="rounded bg-white border-gray-100 border p-3 flex-grow"
              style={{ borderColor: 'rgb(196,196,196)' }}
              id="signup_email"
              name="signup[email]"
              type="text"
              data-required-field="This field is required"
              placeholder={content.emailInputPlaceholder}
            />
            <input
              className="submit rounded p-3 text-gray-800 mt-4 md:mt-0 md:ml-8 md:px-8 cursor-pointer"
              type="submit"
              value={content.buttonText}
              id="webform_submit_button"
              data-default-text={content.buttonText}
              data-submitting-text={content.buttonSendingText}
              data-invalid-text={content.emailInvalidText}
              data-choose-list="↑ Choose a list"
              data-thanks={content.emailInputPlaceholder}
            />
          </div>
        </div>
        <div style={{ background: 'white', fontSize: '1px', height: 0, overflow: 'hidden' }}>
          <input
            type="text"
            name="742a64fdb4c4f45463759555978fab8f"
            style={{
              fontSize: '1px',
              width: '1px !important',
              height: '1px !important',
              border: '0 !important',
              lineHeight: '1px !important',
              padding: 0,
              minHeight: '1px !important',
            }}
          />
          <input className="checkbox" type="checkbox" name="beacon" />
        </div>
      </form>
    </Section>
  );
};

export default EmailSection;
