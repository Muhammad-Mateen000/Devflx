import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq1 = ({
  heading = "Frequently Asked Questions",
  items = [
    {
      id: "faq-1",
      question: "What is a FAQ?",
      answer:
        "A FAQ is a list of frequently asked questions and answers on a particular topic.",
    },
    {
      id: "faq-2",
      question: "What is the purpose of a FAQ?",
      answer:
        "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
    },
    {
      id: "faq-3",
      question: "How do I create a FAQ?",
      answer:
        "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
    },
    {
      id: "faq-4",
      question: "What are the benefits of a FAQ?",
      answer:
        "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
    },
    {
      id: "faq-5",
      question: "How should I organize my FAQ?",
      answer:
        "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
    },
    {
      id: "faq-6",
      question: "How long should FAQ answers be?",
      answer:
        "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
    },
    {
      id: "faq-7",
      question: "Should I include links in my FAQ?",
      answer:
        "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.",
    },
  ],
}) => {
  return (
    <section className="flex justify-center pb-28 pt-8">
      <div className="container max-w-6xl">
        <h1 className="mb-4 text-3xl font-bold md:mb-11 md:text-4xl text-center text-secondary ">
          {heading}
        </h1>

        {/* Grid layout for FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq1 };
