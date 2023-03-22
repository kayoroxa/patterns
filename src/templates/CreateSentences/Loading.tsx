interface Props {
  loading: boolean
  onEnd: () => void
}

export default function Loading({ loading, onEnd }: Props) {
  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(onEnd, 5000)
  //   }
  // }, [loading])

  return (
    <MyLoading loading={loading}>
      <div className="loading"></div>
    </MyLoading>
  )
}

import styled from 'styled-components'

const MyLoading = styled.div<{ loading: boolean }>`
  height: 50px;
  width: 653px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #cecece;

  border-radius: 5px;
  overflow: hidden;

  transition: all 0.5s ease;

  opacity: ${props => (props.loading ? 1 : 0)};

  .loading {
    width: 0%;
    height: 50px;
    background-color: blue;

    transition: 5s;
  }

  .loading.started {
    width: 100%;
  }
`
