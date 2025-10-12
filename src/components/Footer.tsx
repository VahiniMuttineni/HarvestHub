import { Sprout, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">HarvestHub</h3>
            </div>
            <p className="text-secondary-foreground/80">
              Empowering farmers with smart, sustainable crop recommendations for a better harvest.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Our Mission</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Success Stories</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Resources</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Farming Guides</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Community Forum</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                info@harvesthub.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                123 Farm Road, Agriculture Valley
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/70">
          <p>&copy; 2025 HarvestHub. All rights reserved. Growing together for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
};
