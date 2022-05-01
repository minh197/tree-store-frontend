import Link from 'next/link';
import styled from 'styled-components';
import ItemStyles from '../components/styles/ItemStyles';

import FootNoteStyles from '../components/styles/FootNoteStyles';

export default function AboutMe() {
  return (
    <ItemStyles>
      <h1>Hello, my name is Minh Nguyen</h1>
      <h2>
        I am currently a junior, majoring in Computer Science and History at the
        College. I am an aspire software developer. In my free time, I enjoy
        cooking, reading, and hanging out with friends.
      </h2>

      <img
        // style={max-height:75px}
        src={require('../public/profilepic.jpeg')}
        alt="Minhpic"
      />
      <FootNoteStyles>
        <Link href="https://github.com/minh197">GitHub</Link>
        <Link href="https://www.linkedin.com/in/minh-n-90154512b/">
          Linkedin
        </Link>
      </FootNoteStyles>
    </ItemStyles>
  );
}
