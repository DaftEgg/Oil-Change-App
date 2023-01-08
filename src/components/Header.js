import PropTypes from 'prop-types'
import Logo from './Logo'

const Header = ({ title, subTitle }) => {
    return (
        <div className="row text-center">
            <Logo title={title} subTitle={subTitle} />
        </div>
    )
}

Header.defaultProps = {
    title: 'Oil Change',
    subTitle: 'Generate your oil change label'
}

Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default Header