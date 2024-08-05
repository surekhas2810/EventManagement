import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'Amazing food and service!' },
    { name: 'Jane Smith', feedback: 'The best catering experience we’ve had!' },
    // Add more testimonials
  ];

  return (
    <section>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <strong>{testimonial.name}</strong>: {testimonial.feedback}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
