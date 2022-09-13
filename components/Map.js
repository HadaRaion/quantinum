const Map = ({ height }) => {
	return (
		<div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.511171513893!2d127.0244216156667!3d37.51944587980668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3ece281ea39%3A0xde635a98600d1110!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDqsJXrgqjqtawg64-E7IKw64yA66GcIDE2NQ!5e0!3m2!1sko!2sca!4v1662698438427!5m2!1sko!2sca"
				width="100%"
				height={height}
				style={{ border: 0, marginTop: '-150px' }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default Map;
