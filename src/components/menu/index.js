import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeDifficulty } from '../../actions'

const MENU_CONFIG = [
    {
        title: 'Game',
        key: 'game',
        selections: [
            {
                title: 'Difficulty',
                key: 'Difficulty',
                subMenu: [
                    {
                        title: 'Easy',
                        key: 'easy',
                    },
                    {
                        title: 'Medium',
                        key: 'medium',
                    },
                    {
                        title: 'Hard',
                        key: 'hard',
                    },
                ]
            },
            {
                title: 'Exit',
                key: 'exit',
            }
        ]
    }, {
        title: 'Help',
        key: 'help',
        selections: [
            {
                title: 'About',
                key: 'About',
            }
        ]
    },
]

class Menu extends React.Component {
    static mapDispatchToProps = dispatch => ({
        alterDifficulty: difficulty => dispatch(changeDifficulty(difficulty)),
    })

    state = {
        level1Expanded: null,
        submenuExpanded: null,
    }

    componentDidMount = () => {
        window.addEventListener('click', () => {
            this.setState({
                level1Expanded: null,
                submenuExpanded: null,
            })
        })
    }

    componentWillUnmount = () => {
        window.removeEventListener('click')
    }

    handleMenuTitleClick = (e, key) => {
        e.stopPropagation()

        const { level1Expanded } = this.state
        this.setState({
            level1Expanded: level1Expanded === key ? null : key,
            submenuExpanded: null,
        })
    }

    handMenuClick = (e, key) => {
        e.stopPropagation()
    }

    handSubmenuClick = (e, key) => {
        e.stopPropagation()

        this.setState({
            level1Expanded: null,
            submenuExpanded: null,
        })

        const { alterDifficulty } = this.props
        alterDifficulty(key)
    }

    onMouseEnter = (key) => {
        this.setState({
            submenuExpanded: key,
        })
    }

    onMouseLeave = () => {
        this.setState({
            submenuExpanded: null,
        })
    }

    render() {
        const { level1Expanded, submenuExpanded } = this.state
        return (
            <div className="menu-wrapper">
                <ul className="menu-title">
                    {MENU_CONFIG.map(menu => (
                        <li key={menu.key} className="menu-item"
                            onClick={e => this.handleMenuTitleClick(e, menu.key)}
                        >
                            {menu.title}
                            {menu.key === level1Expanded
                                && <ul className="menu-content">
                                    {menu.selections.map(selection => (
                                        <li key={selection.key} className="menu-selection"
                                            onMouseEnter={() => this.onMouseEnter(selection.key)}
                                            onMouseLeave={this.onMouseLeave}
                                            onClick={e => this.handMenuClick(e, selection.key)}
                                        >
                                            {selection.title}
                                            {selection.subMenu && <i>→</i>}
                                            {selection.subMenu && selection.key === submenuExpanded
                                                && <ul className="submenu-content">
                                                    {selection.subMenu.map(submenu => (
                                                        <li key={submenu.key} className="submenu-selection"
                                                            onClick={e => this.handSubmenuClick(e, submenu.key)}
                                                        >
                                                            {submenu.title}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Menu.propTypes = {
    alterDifficulty: PropTypes.func.isRequired,
}

export default connect(null, Menu.mapDispatchToProps)(Menu)
