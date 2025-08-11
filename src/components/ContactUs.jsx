import { Mail, MapPin, Phone } from "lucide-react";
import Form from "./Form";

const Contact1 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
}) => {
  return (
    <section className="bg-background pb-20 px-6">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h1 className="mb-3 mt-2 text-3xl font-bold md:text-4xl text-secondary font-spaceGrotesk">
          {title}
        </h1>
        <p className="text-muted-foreground pt-4 font-poppins max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start shadow-md bg-gray-50 p-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-4 pt-10 font-spaceGrotesk">
              Get in Touch
            </h2>
            <p className="text-muted-foreground font-poppins max-w-96">
              Reach out to us via email or phone, or visit our office. We’d love
              to hear from you!
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="font-semibold font-spaceGrotesk text-xl">
              Email:
            </h1>
            <div className="flex items-center gap-4">
              <Mail className="text-secondary w-6 h-6" />
              <span className="text-muted-foreground font-poppins">
                support@example.com
              </span>
            </div>
            <h1 className="font-semibold font-spaceGrotesk text-xl ">
              Phone:
            </h1>

            <div className="flex items-center gap-4">
              <Phone className="text-secondary w-6 h-6" />
              <span className="text-muted-foreground">+92 300 1234567</span>
            </div>
            <h1 className="font-semibold font-spaceGrotesk text-xl">
              Address:
            </h1>

            <div className="flex items-center gap-4">
              <MapPin className="text-secondary w-6 h-6" />
              <span className="text-muted-foreground">
                123 Main Street, Lahore, Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact1;
