import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
// the benefit os putting styles on root is that you could reuse css inside a stand
// alone svg item

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 4;
  background: green;
  transform: skew(-8deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1 rem;
  }
`;
const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Cool-Trees</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
// Next.Js uses the combination os HTML5 pushstate which is changing the URL as well
// the ability to trigger and rerender pages when that URL has changed. So
// instead of using a hrefs in here, what we use is we use the Next.js capital Link tag
// we will write our CSS using scoped CSS. The package that I am using is styled-components
// The idea behind scoped CSS is that you define all of your CSS in component as well
// A couple of benefits for this this approach:
// First we gonna be abl to scope our CSS easily
// Second you can use JS value inside of your CSS
// For the logo, what we gonna do is we gonna create an h1 component with the styles
// already attached to it. And then that will immediately scope all of the syles to the h1 tag
