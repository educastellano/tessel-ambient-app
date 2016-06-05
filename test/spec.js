import assert from 'assert'
import testdom from 'testdom'

testdom('<html><body></body></html>')

it('has a document', () => {
    assert(document)
})
