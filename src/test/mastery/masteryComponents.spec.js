import React from 'react'
import AddSkill from '../../app/mastery/components/AddSkill'

import { expect } from 'chai'
import { mount, render, shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'


describe('Add Skill', () => {
  configure({ adapter: new Adapter() })

  const wrapper = shallow(<AddSkill/>)

  it('should be a div item', () => {
    expect(wrapper.type()).to.equal('div')
  })
})