"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Camera, Crown, Eye, Mail, Network, Sparkles, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Show", id: "hero" },
            { name: "Experience", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Vogue Fashion Show"
          button={{
            text: "Get Tickets",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Vogue Fashion Show 2024"
          description="Experience the pinnacle of haute couture and luxury fashion at the most exclusive runway event of the year"
          tag="Exclusive Event"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Reserve Seat",
              href: "contact"
            },
            {
              text: "View Collection",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/9511241/pexels-photo-9511241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Models walking down a stylish runway in white dresses during an elegant indoor fashion show."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Exclusive Fashion Experience"
          description="Immerse yourself in the world of haute couture with unprecedented access to fashion's elite"
          tag="Premium Access"
          tagIcon={Crown}
          features={[
            {
              title: "Front Row Seating",
              description: "Premium positioning to witness every detail of the runway presentation",
              icon: Eye
            },
            {
              title: "Designer Meet & Greet",
              description: "Exclusive opportunity to connect with world-renowned fashion designers",
              icon: Users
            },
            {
              title: "Behind-the-Scenes Access",
              description: "Rare glimpse into the preparation and artistry behind the collection",
              icon: Camera
            },
            {
              title: "Fashion Industry Networking",
              description: "Connect with editors, buyers, and industry professionals",
              icon: Network
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured Fashion Houses"
          description="The world's most prestigious luxury brands showcase their latest collections"
          logos={[
            "https://images.pexels.com/photos/32085869/pexels-photo-32085869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18858792/pexels-photo-18858792.png?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12961429/pexels-photo-12961429.png?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31209272/pexels-photo-31209272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/32085869/pexels-photo-32085869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6357475/pexels-photo-6357475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Fashion Elite Say"
          description="Hear from industry leaders about their Vogue Fashion Show experience"
          testimonials={[
            {
              id: "1",
              name: "Isabella Rossi",
              role: "Fashion Editor",
              company: "Vogue Italia",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7205933/pexels-photo-7205933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "An elegant woman in trendy attire leans thoughtfully on a stylish chair, exuding a sense of modern fashion."
            },
            {
              id: "2",
              name: "Alexander Chen",
              role: "Creative Director",
              company: "Luxury Brands Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1845840/pexels-photo-1845840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a woman with bold makeup and curls, exuding elegance against a dark background."
            },
            {
              id: "3",
              name: "Sophie Laurent",
              role: "Fashion Photographer",
              company: "Elite Fashion Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Stylish woman in black leather outfit reclines in a minimalist studio with open space."
            },
            {
              id: "4",
              name: "Victoria Sterling",
              role: "Fashion Influencer",
              company: "Style Authority",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7205933/pexels-photo-7205933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "An elegant woman in trendy attire leans thoughtfully on a stylish chair, exuding a sense of modern fashion."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Exclusive Invitation"
          tagIcon={Mail}
          title="Secure Your Front Row Experience"
          description="Join fashion's elite at the most anticipated runway event of the year. Limited seating available."
          inputPlaceholder="Enter your email address"
          buttonText="Request Invitation"
          termsText="By submitting, you agree to receive exclusive fashion event updates and invitations."
          imageSrc="https://images.pexels.com/photos/16985141/pexels-photo-16985141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant indoor HOF party setup with decorated flowers and a sophisticated sign backdrop."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Event",
              items: [
                { label: "Fashion Show", href: "hero" },
                { label: "Experience", href: "feature" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Press Inquiries", href: "contact" },
                { label: "Partnerships", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2024 Vogue Fashion Show | All Rights Reserved"
        />
      </div>
    </ThemeProvider>
  );
}