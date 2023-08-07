const move = (direction, containerCa, track) => {
    const containerCaWidth = containerCa.current.offsetWidth;
    const trackWidth = track.current.offsetWidth;
    const cardWith = containerCa.current.firstElementChild.offsetWidth;
    let leftPosition = containerCa.current.style.left == "" ? 0 : parseFloat(containerCa.current.style.left.slice(0, -2) * - 1);
    if (direction) {
        if (leftPosition < (containerCaWidth - trackWidth)) {
            leftPosition += cardWith + 16;
            containerCa.current.style.left = `-${leftPosition}px`
        } else {
            containerCa.current.style.left = 0
        }
    } else {
        if (leftPosition > 0) {
            leftPosition -= cardWith + 16;
            containerCa.current.style.left = `-${leftPosition}px`
        }
    }
}

export default move;