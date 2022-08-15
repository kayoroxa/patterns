import styled from 'styled-components'

export const ContainerCreateSentences = styled.div`
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #272a41;

  * {
    font-size: 1.3rem;
    color: white;
    font-family: 'Roboto', sans-serif;
    /* transition: all 0.3s ease-in-out; */
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;

    -webkit-user-drag: none;
  }

  *::selection {
    color: #3bceac;
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .combinations {
    position: fixed;
    bottom: 30px;
    left: 40px;
  }

  .index {
    position: fixed;
    top: 30px;
    left: 30px;
  }

  .flow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .al {
    padding: 15px;
    border: 3px solid #4a507c;
    border-style: dashed;
    max-height: 85vh;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    :hover {
      border-color: white;
    }
  }

  .al-inside {
    min-height: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 10px;
    flex-direction: column;

    justify-content: center;
  }

  .cell {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    .tag {
      height: 100%;
      width: 10px;
      right: -1px;
      position: absolute;
    }

    :hover {
      cursor: pointer;
      transform: scale(1.25);
    }
  }

  .word {
    overflow: auto;
    background: #545a87;
    padding: 5px 13px;
    border-radius: 5px;
    text-align: center;
    text-transform: lowercase;
    overflow: hidden;

    /*  */
    :hover {
      background: #70769e;
      color: white;
    }
  }

  .word.small {
    font-size: 0.8rem;
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 30px;
    background: #343854;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    color: white;
    //SHADOW
    box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.2);
    transition: 0.1s;

    :hover {
      background: #545a87;
      transform: scale(1.05);
    }
  }

  .after {
    position: fixed;
    bottom: 30px;
  }

  .emphasis {
    background: white !important;
    color: black !important;
  }

  .translation {
    position: fixed;
    top: 20px;
    right: 20px;
  }

  .translation-en {
    position: fixed;
    top: 40px;
    right: 20px;
  }
`
