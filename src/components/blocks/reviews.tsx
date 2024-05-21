import Review, { ReviewWrapper } from '@/components/ui/reviews'

export default function Reviews() {
  return (
    <ReviewWrapper>
      <Review
        message="I don't believe just launched project in one day. This so fast and easy."
        reviewer="Iqbal Abdurrahman"
        reviewerRole="Software Engineer"
        src="https://github.com/iblabd.png"
      />
    </ReviewWrapper>
  )
}
