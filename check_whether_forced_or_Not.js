const handleSGRef = useRef(null);
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.keyCode === 13 && document.activeElement === handleSGRef.current) {
        searchAction(1, true);
      }
    };
  }, []);
