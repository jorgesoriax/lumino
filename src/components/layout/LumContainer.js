import { Container } from "@chakra-ui/react"

/**
 * LumContainer
 * xs - 640
 * sm - 880
 * md 1024
 * lg 1280
 * xl 1920
 * full 100%
 */
export default function LumContainer({children, ...props}) {
    return (
        <Container border="1px solid red">
            {children}
        </Container>
    )
}