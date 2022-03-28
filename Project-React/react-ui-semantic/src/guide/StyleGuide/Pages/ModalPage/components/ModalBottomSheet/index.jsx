import React, { useState, useEffect } from "react";
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Button } from "semantic-ui-react";
import 'react-spring-bottom-sheet/dist/style.css'

const ModalButtomSheet: NextPage<GetStaticProps> = ({
	description,
	homepage,
	meta,
	name,
  }) => {
	const [open, setOpen] = useState(false)
  
	// Ensure it animates in when loaded
	useEffect(() => {
	  setOpen(false)
	}, [])
  
	function onDismiss() {
	  setOpen(false)
	}
  
	return (
	  <>
		  <Button className="primary" onClick={() => setOpen(true)}>Open BottomSheet</Button>
		  <BottomSheet
			/* Options: https://github.com/stipsan/react-spring-bottom-sheet */   
			open={open}
			onDismiss={onDismiss}
			snapPoints={({ minHeight }) => 400}
			header={
				<h2>Header Sticky</h2>
			}
			footer={
			  <Button onClick={onDismiss} className="primary">
				Close
			  </Button>
			}
		  >
			<div className="in-sec">
			  <p>
				Start
			  </p>
			  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			  <p>
				End
			  </p>
			</div>
		  </BottomSheet>
	  </>
	)
  }
  
  export default ModalButtomSheet