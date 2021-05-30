import FeaturedPost from '../components/homepage/featured-post'
import LatestPost from '../components/homepage/latest-post'
import CtaPost from '../components/homepage/cta-post'
import DefaultPageLayout from "../components/layout/default";

export default function Home() {
  return (
    <DefaultPageLayout>
      
      <FeaturedPost />
      <LatestPost />
      <CtaPost />
    </DefaultPageLayout>
  );
}
