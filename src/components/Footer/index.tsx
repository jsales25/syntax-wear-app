import { Copyright } from "../Copyright";
import { SubscriptionForm } from "../SubscriptionForm";
import { SocialLinks } from "../SocialLinks";
import { MenuItems } from "../MenuItems";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between py-10 px-2 gap-2">
          <div className="flex flex-col gap-8 min-w-[344px]">
            <SubscriptionForm />

            <SocialLinks />
          </div>

          <MenuItems />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
