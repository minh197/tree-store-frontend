import Link from 'next/link';
import styled from 'styled-components';
import FootNoteStyles from '../components/styles/FootNoteStyles';

export default function AboutMe() {
  return (
    <div>
      <h1>Hello, my name is Minh Nguyen</h1>
      <h2>
        I am currently a junior, majoring in Computer Science and History at the
        College
      </h2>
      <h3>
        I am an aspire software developer. In my free time, I love
        cooking,reading, and hanging out with friends
      </h3>

      <FootNoteStyles>
        <Link href="https://github.com/minh197">GitHub</Link>
        <Link href="https://www.linkedin.com/in/minh-n-90154512b/">
          Linkedin
        </Link>
      </FootNoteStyles>
    </div>
  );
}
