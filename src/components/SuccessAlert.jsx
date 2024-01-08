import Swal from 'sweetalert2'
import PropTypes from 'prop-types'

export default function SuccessAlert({title}) {
    return(
        Swal.fire({
            icon: 'success',
            title: title,
            background: '#AC00BD',
            color: '#FFCE0B',
            showConfirmButton: false,
            timer: 2000
        })
    )
}

SuccessAlert.propTypes = {
    title: PropTypes.string
}