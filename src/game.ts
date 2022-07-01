import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script2 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script4 from "../89375bda-dab8-49b5-bb44-6d94bab2d1b4/src/item"
import Script5 from "../1dc0345a-f5dd-43b6-bf14-30e7752101b4/src/item"
import Script6 from "../7cd4d0bc-54d4-4f64-8ab2-6f18f41f03a3/src/item"
import Script7 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script8 from "../c1e126e7-374e-4fe3-aaae-b4211c321cf3/src/item"
import Script9 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script10 from "../1f1dfb04-879e-422f-a8da-44852a421199/src/item"
import Script11 from "../bcdcfbe4-bd95-4100-9174-b38785b45e2c/src/item"
import Script12 from "../12b03cb6-2066-4f72-b8ef-27bb851de48e/src/item"
import Script13 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script14 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"
import Script15 from "../28352c3a-cc20-4ab4-b4b8-a4562a6b0d4d/src/item"
import Script16 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script17 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("3bd7d322-f897-444e-99f1-e4e82fb2c035/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
const gltfShape2 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainGlass2.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(2, 0, 3),
  rotation: new Quaternion(1.1970133026535028e-15, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(22.499998092651367, 3.5, 0.009999881498515606)
})
wallPlainGlass2.addComponentOrReplace(transform11)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(1.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-21.71799087524414, 3.5, 0.0009999970206990838)
})
wallPlainGlass3.addComponentOrReplace(transform12)
wallPlainGlass3.addComponentOrReplace(gltfShape2)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
wallPlainGlass.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(45, 0, 3),
  rotation: new Quaternion(1.1970133026535028e-15, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(22.499998092651367, 3.5, 0.009999881498515606)
})
wallPlainGlass.addComponentOrReplace(transform13)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(45, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.999999046325684, 2.5, 0.5000001788139343)
})
wallPlainGlass5.addComponentOrReplace(transform14)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(14, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.999999046325684, 2.5, 0.5000001788139343)
})
wallPlainGlass4.addComponentOrReplace(transform15)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(1.5, 10, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-21.920608520507812, 1, 0.0009999998146668077)
})
wallPlainGlass6.addComponentOrReplace(transform16)
wallPlainGlass6.addComponentOrReplace(gltfShape2)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(23.5, 12, 3),
  rotation: new Quaternion(9.573054561519065e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(18.750001907348633, 6, 1.0000005960464478)
})
plainText.addComponentOrReplace(transform17)

const coffeeMachine = new Entity('coffeeMachine')
engine.addEntity(coffeeMachine)
coffeeMachine.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(7.5, 0, 40.5),
  rotation: new Quaternion(2.329557445383823e-14, 3.3527612686157227e-7, -3.375077994860476e-14, 1),
  scale: new Vector3(2, 3, 5.000003337860107)
})
coffeeMachine.addComponentOrReplace(transform18)
const gltfShape3 = new GLTFShape("bf7da256-1314-40dc-a5b4-19c8dc5196e4/Coffee_Machine.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
coffeeMachine.addComponentOrReplace(gltfShape3)

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(40.5, 0, 27.5),
  rotation: new Quaternion(2.984795663600148e-15, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
videoScreenStanding.addComponentOrReplace(transform19)

const drawers = new Entity('drawers')
engine.addEntity(drawers)
drawers.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(42, 0, 22),
  rotation: new Quaternion(-3.9361951401756766e-15, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
drawers.addComponentOrReplace(transform20)
const gltfShape4 = new GLTFShape("a7afb9c7-eb2a-4d05-807f-e284b128e434/Furnit 2.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
drawers.addComponentOrReplace(gltfShape4)

const streetEntry = new Entity('streetEntry')
engine.addEntity(streetEntry)
streetEntry.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(23.5, 1.5, 1.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.374999523162842, 1.6875, 0.0010000000474974513)
})
streetEntry.addComponentOrReplace(transform21)
const gltfShape5 = new GLTFShape("8076e7cf-d4e5-4377-881c-4306c73ec28d/Street Entry.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
streetEntry.addComponentOrReplace(gltfShape5)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(38, 0, 28),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000039339065552, 1.5, 1.0000019073486328)
})
externalLink.addComponentOrReplace(transform22)

const grassTile = new Entity('grassTile')
engine.addEntity(grassTile)
grassTile.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(23, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile.addComponentOrReplace(transform23)
const gltfShape6 = new GLTFShape("7f2dbcb5-40f5-4e2f-9409-1886d26ce068/FloorBlock_05/FloorBlock_05.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
grassTile.addComponentOrReplace(gltfShape6)

const grassTile2 = new Entity('grassTile2')
engine.addEntity(grassTile2)
grassTile2.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(23, 0, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile2.addComponentOrReplace(transform24)
grassTile2.addComponentOrReplace(gltfShape6)

const grassTile3 = new Entity('grassTile3')
engine.addEntity(grassTile3)
grassTile3.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(23, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, -16.875)
})
grassTile3.addComponentOrReplace(transform25)
grassTile3.addComponentOrReplace(gltfShape6)

const grassTile4 = new Entity('grassTile4')
engine.addEntity(grassTile4)
grassTile4.setParent(_scene)
grassTile4.addComponentOrReplace(gltfShape6)
const transform26 = new Transform({
  position: new Vector3(23, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile4.addComponentOrReplace(transform26)

const grassTile5 = new Entity('grassTile5')
engine.addEntity(grassTile5)
grassTile5.setParent(_scene)
grassTile5.addComponentOrReplace(gltfShape6)
const transform27 = new Transform({
  position: new Vector3(23, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile5.addComponentOrReplace(transform27)

const grassTile6 = new Entity('grassTile6')
engine.addEntity(grassTile6)
grassTile6.setParent(_scene)
grassTile6.addComponentOrReplace(gltfShape6)
const transform28 = new Transform({
  position: new Vector3(23, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile6.addComponentOrReplace(transform28)

const grassTile7 = new Entity('grassTile7')
engine.addEntity(grassTile7)
grassTile7.setParent(_scene)
grassTile7.addComponentOrReplace(gltfShape6)
const transform29 = new Transform({
  position: new Vector3(23, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile7.addComponentOrReplace(transform29)

const grassTile8 = new Entity('grassTile8')
engine.addEntity(grassTile8)
grassTile8.setParent(_scene)
grassTile8.addComponentOrReplace(gltfShape6)
const transform30 = new Transform({
  position: new Vector3(23, 0, 45.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile8.addComponentOrReplace(transform30)

const grassTile9 = new Entity('grassTile9')
engine.addEntity(grassTile9)
grassTile9.setParent(_scene)
grassTile9.addComponentOrReplace(gltfShape6)
const transform31 = new Transform({
  position: new Vector3(23, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile9.addComponentOrReplace(transform31)

const grassTile10 = new Entity('grassTile10')
engine.addEntity(grassTile10)
grassTile10.setParent(_scene)
grassTile10.addComponentOrReplace(gltfShape6)
const transform32 = new Transform({
  position: new Vector3(25, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, -16.875)
})
grassTile10.addComponentOrReplace(transform32)

const grassTile11 = new Entity('grassTile11')
engine.addEntity(grassTile11)
grassTile11.setParent(_scene)
grassTile11.addComponentOrReplace(gltfShape6)
const transform33 = new Transform({
  position: new Vector3(25, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile11.addComponentOrReplace(transform33)

const grassTile12 = new Entity('grassTile12')
engine.addEntity(grassTile12)
grassTile12.setParent(_scene)
grassTile12.addComponentOrReplace(gltfShape6)
const transform34 = new Transform({
  position: new Vector3(25, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile12.addComponentOrReplace(transform34)

const grassTile13 = new Entity('grassTile13')
engine.addEntity(grassTile13)
grassTile13.setParent(_scene)
grassTile13.addComponentOrReplace(gltfShape6)
const transform35 = new Transform({
  position: new Vector3(25, 0, 38.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile13.addComponentOrReplace(transform35)

const grassTile14 = new Entity('grassTile14')
engine.addEntity(grassTile14)
grassTile14.setParent(_scene)
grassTile14.addComponentOrReplace(gltfShape6)
const transform36 = new Transform({
  position: new Vector3(25, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile14.addComponentOrReplace(transform36)

const grassTile15 = new Entity('grassTile15')
engine.addEntity(grassTile15)
grassTile15.setParent(_scene)
grassTile15.addComponentOrReplace(gltfShape6)
const transform37 = new Transform({
  position: new Vector3(25, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile15.addComponentOrReplace(transform37)

const grassTile16 = new Entity('grassTile16')
engine.addEntity(grassTile16)
grassTile16.setParent(_scene)
grassTile16.addComponentOrReplace(gltfShape6)
const transform38 = new Transform({
  position: new Vector3(25, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile16.addComponentOrReplace(transform38)

const grassTile17 = new Entity('grassTile17')
engine.addEntity(grassTile17)
grassTile17.setParent(_scene)
grassTile17.addComponentOrReplace(gltfShape6)
const transform39 = new Transform({
  position: new Vector3(25, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile17.addComponentOrReplace(transform39)

const grassTile18 = new Entity('grassTile18')
engine.addEntity(grassTile18)
grassTile18.setParent(_scene)
grassTile18.addComponentOrReplace(gltfShape6)
const transform40 = new Transform({
  position: new Vector3(24, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile18.addComponentOrReplace(transform40)

const signpostDirections2 = new Entity('signpostDirections2')
engine.addEntity(signpostDirections2)
signpostDirections2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(21, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
signpostDirections2.addComponentOrReplace(transform41)

const signpostGolden = new Entity('signpostGolden')
engine.addEntity(signpostGolden)
signpostGolden.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(26.5, 0, 24.5),
  rotation: new Quaternion(9.476975852540026e-17, -1, 1.1920926823449918e-7, -2.9802318834981634e-8),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
})
signpostGolden.addComponentOrReplace(transform42)

const grassTile19 = new Entity('grassTile19')
engine.addEntity(grassTile19)
grassTile19.setParent(_scene)
grassTile19.addComponentOrReplace(gltfShape6)
const transform43 = new Transform({
  position: new Vector3(27, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile19.addComponentOrReplace(transform43)

const grassTile20 = new Entity('grassTile20')
engine.addEntity(grassTile20)
grassTile20.setParent(_scene)
grassTile20.addComponentOrReplace(gltfShape6)
const transform44 = new Transform({
  position: new Vector3(27, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile20.addComponentOrReplace(transform44)

const grassTile21 = new Entity('grassTile21')
engine.addEntity(grassTile21)
grassTile21.setParent(_scene)
grassTile21.addComponentOrReplace(gltfShape6)
const transform45 = new Transform({
  position: new Vector3(29, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile21.addComponentOrReplace(transform45)

const grassTile22 = new Entity('grassTile22')
engine.addEntity(grassTile22)
grassTile22.setParent(_scene)
grassTile22.addComponentOrReplace(gltfShape6)
const transform46 = new Transform({
  position: new Vector3(29, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile22.addComponentOrReplace(transform46)

const grassTile23 = new Entity('grassTile23')
engine.addEntity(grassTile23)
grassTile23.setParent(_scene)
grassTile23.addComponentOrReplace(gltfShape6)
const transform47 = new Transform({
  position: new Vector3(31, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile23.addComponentOrReplace(transform47)

const grassTile24 = new Entity('grassTile24')
engine.addEntity(grassTile24)
grassTile24.setParent(_scene)
grassTile24.addComponentOrReplace(gltfShape6)
const transform48 = new Transform({
  position: new Vector3(31, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile24.addComponentOrReplace(transform48)

const grassTile25 = new Entity('grassTile25')
engine.addEntity(grassTile25)
grassTile25.setParent(_scene)
grassTile25.addComponentOrReplace(gltfShape6)
const transform49 = new Transform({
  position: new Vector3(33, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile25.addComponentOrReplace(transform49)

const grassTile26 = new Entity('grassTile26')
engine.addEntity(grassTile26)
grassTile26.setParent(_scene)
grassTile26.addComponentOrReplace(gltfShape6)
const transform50 = new Transform({
  position: new Vector3(33, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile26.addComponentOrReplace(transform50)

const grassTile27 = new Entity('grassTile27')
engine.addEntity(grassTile27)
grassTile27.setParent(_scene)
grassTile27.addComponentOrReplace(gltfShape6)
const transform51 = new Transform({
  position: new Vector3(35, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile27.addComponentOrReplace(transform51)

const grassTile28 = new Entity('grassTile28')
engine.addEntity(grassTile28)
grassTile28.setParent(_scene)
grassTile28.addComponentOrReplace(gltfShape6)
const transform52 = new Transform({
  position: new Vector3(35, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile28.addComponentOrReplace(transform52)

const grassTile29 = new Entity('grassTile29')
engine.addEntity(grassTile29)
grassTile29.setParent(_scene)
grassTile29.addComponentOrReplace(gltfShape6)
const transform53 = new Transform({
  position: new Vector3(37, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile29.addComponentOrReplace(transform53)

const grassTile30 = new Entity('grassTile30')
engine.addEntity(grassTile30)
grassTile30.setParent(_scene)
grassTile30.addComponentOrReplace(gltfShape6)
const transform54 = new Transform({
  position: new Vector3(37, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassTile30.addComponentOrReplace(transform54)

const armchairC = new Entity('armchairC')
engine.addEntity(armchairC)
armchairC.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(35.5, 0, 30),
  rotation: new Quaternion(1.129297571322613e-15, 1, -1.1920925402364446e-7, -9.685754776000977e-8),
  scale: new Vector3(1, 1, 1)
})
armchairC.addComponentOrReplace(transform55)
const gltfShape7 = new GLTFShape("bf297f86-f4f6-4179-84a5-95690bf0f2c3/Armchair_C.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
armchairC.addComponentOrReplace(gltfShape7)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(30, 0, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-7.492499828338623, 2.5, 0.9999982714653015)
})
wallPlainGlass9.addComponentOrReplace(transform56)
wallPlainGlass9.addComponentOrReplace(gltfShape2)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(31, 9.5, 34),
  rotation: new Quaternion(-0.7071068286895752, -9.000775385431536e-16, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(-6.9900007247924805, 1.749997854232788, 2.004999876022339)
})
wallPlainGlass11.addComponentOrReplace(transform57)
wallPlainGlass11.addComponentOrReplace(gltfShape2)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape2)
const transform58 = new Transform({
  position: new Vector3(31, 9.5, 27),
  rotation: new Quaternion(-0.7071068286895752, -9.000775385431536e-16, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(-6.9900007247924805, 1.749997854232788, 2.004999876022339)
})
wallPlainGlass12.addComponentOrReplace(transform58)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape2)
const transform59 = new Transform({
  position: new Vector3(29.5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-7.492499828338623, 2.5, 0.9999982714653015)
})
wallPlainGlass10.addComponentOrReplace(transform59)

const cyberpunkDoor = new Entity('cyberpunkDoor')
engine.addEntity(cyberpunkDoor)
cyberpunkDoor.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(30, 0, 29),
  rotation: new Quaternion(8.860399791456633e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
cyberpunkDoor.addComponentOrReplace(transform60)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape2)
const transform61 = new Transform({
  position: new Vector3(30, 0, 20),
  rotation: new Quaternion(-2.748709793508482e-16, 0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(3.5156257152557373, 1.5, -1.000000238418579)
})
wallPlainGlass14.addComponentOrReplace(transform61)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape2)
const transform62 = new Transform({
  position: new Vector3(30, 0, 34),
  rotation: new Quaternion(2.748709793508482e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(2.343750476837158, 1.5, 1.000000238418579)
})
wallPlainGlass13.addComponentOrReplace(transform62)

const wallPlainGlass15 = new Entity('wallPlainGlass15')
engine.addEntity(wallPlainGlass15)
wallPlainGlass15.setParent(_scene)
wallPlainGlass15.addComponentOrReplace(gltfShape2)
const transform63 = new Transform({
  position: new Vector3(31, 6, 34.5),
  rotation: new Quaternion(2.748709793508482e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(7.031251430511475, 0.75, 1.000000238418579)
})
wallPlainGlass15.addComponentOrReplace(transform63)

const armchairC2 = new Entity('armchairC2')
engine.addEntity(armchairC2)
armchairC2.setParent(_scene)
armchairC2.addComponentOrReplace(gltfShape7)
const transform64 = new Transform({
  position: new Vector3(36, 0, 26),
  rotation: new Quaternion(1.4210853868169056e-14, -9.685754776000977e-8, 7.108369950059763e-15, -1),
  scale: new Vector3(1, 1, 1)
})
armchairC2.addComponentOrReplace(transform64)

const armchairC3 = new Entity('armchairC3')
engine.addEntity(armchairC3)
armchairC3.setParent(_scene)
armchairC3.addComponentOrReplace(gltfShape7)
const transform65 = new Transform({
  position: new Vector3(32.5, 0, 26),
  rotation: new Quaternion(1.4210853868169056e-14, -9.685754776000977e-8, 7.108369950059763e-15, -1),
  scale: new Vector3(1, 1, 1)
})
armchairC3.addComponentOrReplace(transform65)

const armchairC4 = new Entity('armchairC4')
engine.addEntity(armchairC4)
armchairC4.setParent(_scene)
armchairC4.addComponentOrReplace(gltfShape7)
const transform66 = new Transform({
  position: new Vector3(32, 0, 30),
  rotation: new Quaternion(1.129297571322613e-15, 1, -1.1920925402364446e-7, -9.685754776000977e-8),
  scale: new Vector3(1, 1, 1)
})
armchairC4.addComponentOrReplace(transform66)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(15.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blockFloorLight.addComponentOrReplace(transform67)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(32.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blockFloorLight2.addComponentOrReplace(transform68)

const roundedStarlightRug = new Entity('roundedStarlightRug')
engine.addEntity(roundedStarlightRug)
roundedStarlightRug.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(34, 0, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundedStarlightRug.addComponentOrReplace(transform69)
const gltfShape8 = new GLTFShape("0b906173-5b55-4c95-9a53-9d9c6ba21fe0/Carpet_02/Carpet_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
roundedStarlightRug.addComponentOrReplace(gltfShape8)

const galleryInfoBlack = new Entity('galleryInfoBlack')
engine.addEntity(galleryInfoBlack)
galleryInfoBlack.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(27.5, 0, 33.5),
  rotation: new Quaternion(-1.0682437329460545e-14, 0.9807853102684021, -1.1691872003893877e-7, -0.19509029388427734),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
galleryInfoBlack.addComponentOrReplace(transform70)

const blueLightBlock = new Entity('blueLightBlock')
engine.addEntity(blueLightBlock)
blueLightBlock.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(22, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 30)
})
blueLightBlock.addComponentOrReplace(transform71)
const gltfShape9 = new GLTFShape("dba7c6c8-4b41-409e-88b3-84178ec417ce/LightBlock_02/LightBlock_02.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
blueLightBlock.addComponentOrReplace(gltfShape9)

const blueLightBlock2 = new Entity('blueLightBlock2')
engine.addEntity(blueLightBlock2)
blueLightBlock2.setParent(_scene)
blueLightBlock2.addComponentOrReplace(gltfShape9)
const transform72 = new Transform({
  position: new Vector3(26, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 30)
})
blueLightBlock2.addComponentOrReplace(transform72)

const grassTile31 = new Entity('grassTile31')
engine.addEntity(grassTile31)
grassTile31.setParent(_scene)
grassTile31.addComponentOrReplace(gltfShape6)
const transform73 = new Transform({
  position: new Vector3(17.5, 0, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1.000000238418579)
})
grassTile31.addComponentOrReplace(transform73)

const blueLightBlock3 = new Entity('blueLightBlock3')
engine.addEntity(blueLightBlock3)
blueLightBlock3.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(17, 0, 38.5),
  rotation: new Quaternion(-1.6754864385688144e-15, 0.7071067690849304, -8.429367426288081e-8, -0.7071068286895752),
  scale: new Vector3(0.9999999403953552, 1, 8.25)
})
blueLightBlock3.addComponentOrReplace(transform74)
blueLightBlock3.addComponentOrReplace(gltfShape9)

const blueLightBlock4 = new Entity('blueLightBlock4')
engine.addEntity(blueLightBlock4)
blueLightBlock4.setParent(_scene)
blueLightBlock4.addComponentOrReplace(gltfShape9)
const transform75 = new Transform({
  position: new Vector3(17, 0, 42.5),
  rotation: new Quaternion(-1.6754864385688144e-15, 0.7071067690849304, -8.429367426288081e-8, -0.7071068286895752),
  scale: new Vector3(0.9999999403953552, 1, 8.25)
})
blueLightBlock4.addComponentOrReplace(transform75)

const coffeeTable = new Entity('coffeeTable')
engine.addEntity(coffeeTable)
coffeeTable.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(9, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coffeeTable.addComponentOrReplace(transform76)
const gltfShape10 = new GLTFShape("61265486-0bbb-462e-80c0-30754daf97ed/Coffee_Table.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
coffeeTable.addComponentOrReplace(gltfShape10)

const coffeeTable2 = new Entity('coffeeTable2')
engine.addEntity(coffeeTable2)
coffeeTable2.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(9, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coffeeTable2.addComponentOrReplace(transform77)
const gltfShape11 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
coffeeTable2.addComponentOrReplace(gltfShape11)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(9, 0, 40.5),
  rotation: new Quaternion(4.565442470042859e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(1.5000028610229492, 1.5, 1.0000011920928955)
})
externalLink2.addComponentOrReplace(transform78)

const signpostGolden2 = new Entity('signpostGolden2')
engine.addEntity(signpostGolden2)
signpostGolden2.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(21, 0, 37),
  rotation: new Quaternion(9.476975852540026e-17, -1, 1.1920926823449918e-7, -2.9802318834981634e-8),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
})
signpostGolden2.addComponentOrReplace(transform79)

const grassTile32 = new Entity('grassTile32')
engine.addEntity(grassTile32)
grassTile32.setParent(_scene)
grassTile32.addComponentOrReplace(gltfShape6)
const transform80 = new Transform({
  position: new Vector3(17.5, 0, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 1.000000238418579)
})
grassTile32.addComponentOrReplace(transform80)

const wallPlainGlass17 = new Entity('wallPlainGlass17')
engine.addEntity(wallPlainGlass17)
wallPlainGlass17.setParent(_scene)
wallPlainGlass17.addComponentOrReplace(gltfShape2)
const transform81 = new Transform({
  position: new Vector3(15, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.499999046325684, 1.125, 0.9999998807907104)
})
wallPlainGlass17.addComponentOrReplace(transform81)

const wallPlainGlass18 = new Entity('wallPlainGlass18')
engine.addEntity(wallPlainGlass18)
wallPlainGlass18.setParent(_scene)
wallPlainGlass18.addComponentOrReplace(gltfShape2)
const transform82 = new Transform({
  position: new Vector3(15.5, 4.5, 35.5),
  rotation: new Quaternion(-0.7071067690849304, -3.161013850672134e-8, -1.7912408623033116e-7, -0.7071068286895752),
  scale: new Vector3(7.499999046325684, 2.625, -1)
})
wallPlainGlass18.addComponentOrReplace(transform82)

const armchairC5 = new Entity('armchairC5')
engine.addEntity(armchairC5)
armchairC5.setParent(_scene)
armchairC5.addComponentOrReplace(gltfShape7)
const transform83 = new Transform({
  position: new Vector3(14, 0, 43.5),
  rotation: new Quaternion(1.129297571322613e-15, 1, -1.1920925402364446e-7, -9.685754776000977e-8),
  scale: new Vector3(1, 1, 1)
})
armchairC5.addComponentOrReplace(transform83)

const armchairC6 = new Entity('armchairC6')
engine.addEntity(armchairC6)
armchairC6.setParent(_scene)
armchairC6.addComponentOrReplace(gltfShape7)
const transform84 = new Transform({
  position: new Vector3(18, 0, 43.5),
  rotation: new Quaternion(1.129297571322613e-15, 1, -1.1920925402364446e-7, -9.685754776000977e-8),
  scale: new Vector3(1, 1, 1)
})
armchairC6.addComponentOrReplace(transform84)

const armchairC7 = new Entity('armchairC7')
engine.addEntity(armchairC7)
armchairC7.setParent(_scene)
armchairC7.addComponentOrReplace(gltfShape7)
const transform85 = new Transform({
  position: new Vector3(16, 0, 37.5),
  rotation: new Quaternion(1.4210853868169056e-14, -9.685754776000977e-8, 7.108369950059763e-15, -1),
  scale: new Vector3(1, 1, 1)
})
armchairC7.addComponentOrReplace(transform85)

const armchairC8 = new Entity('armchairC8')
engine.addEntity(armchairC8)
armchairC8.setParent(_scene)
armchairC8.addComponentOrReplace(gltfShape7)
const transform86 = new Transform({
  position: new Vector3(19.5, 0, 37.5),
  rotation: new Quaternion(1.4210853868169056e-14, -9.685754776000977e-8, 7.108369950059763e-15, -1),
  scale: new Vector3(1, 1, 1)
})
armchairC8.addComponentOrReplace(transform86)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(29, 7.5, 26.5),
  rotation: new Quaternion(2.107343100021808e-8, -0.7071067690849304, 1.0536712125031045e-7, 0.70710688829422),
  scale: new Vector3(3.7500267028808594, 5, 1.0000065565109253)
})
plainText3.addComponentOrReplace(transform87)

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(42, 1, 22),
  rotation: new Quaternion(-4.919850054899122e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000073909759521, 1, 1.0000073909759521)
})
scoreboard.addComponentOrReplace(transform88)

const spaceRoomWithStairs = new Entity('spaceRoomWithStairs')
engine.addEntity(spaceRoomWithStairs)
spaceRoomWithStairs.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(31, 0, 41.5),
  rotation: new Quaternion(-1.8995778986108857e-15, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
spaceRoomWithStairs.addComponentOrReplace(transform89)
const gltfShape12 = new GLTFShape("21c23d1a-5c26-48e1-a09b-f7d7454ebc77/SpaceRoom_01/SpaceRoom_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
spaceRoomWithStairs.addComponentOrReplace(gltfShape12)

const signpostGolden3 = new Entity('signpostGolden3')
engine.addEntity(signpostGolden3)
signpostGolden3.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(26.5, 0, 39),
  rotation: new Quaternion(9.476975852540026e-17, -1, 1.1920926823449918e-7, -2.9802318834981634e-8),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
})
signpostGolden3.addComponentOrReplace(transform90)

const steampunkDesk = new Entity('steampunkDesk')
engine.addEntity(steampunkDesk)
steampunkDesk.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(4.5, 0, 23),
  rotation: new Quaternion(2.973809349812728e-14, -1, 8.940695295223122e-8, -8.940696716308594e-8),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
steampunkDesk.addComponentOrReplace(transform91)
const gltfShape13 = new GLTFShape("9d00a781-62b8-42f5-a77b-ba510865e4cb/Steampunk Desk.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
steampunkDesk.addComponentOrReplace(gltfShape13)

const tableWithChairs = new Entity('tableWithChairs')
engine.addEntity(tableWithChairs)
tableWithChairs.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(14, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWithChairs.addComponentOrReplace(transform92)
const gltfShape14 = new GLTFShape("f7de372b-3ac8-4f56-a822-640326132014/Table_with_Chairs.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
tableWithChairs.addComponentOrReplace(gltfShape14)

const chairHighBack = new Entity('chairHighBack')
engine.addEntity(chairHighBack)
chairHighBack.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(5, 0, 21.5),
  rotation: new Quaternion(9.279464471671252e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
chairHighBack.addComponentOrReplace(transform93)
const gltfShape15 = new GLTFShape("9cc4b4a2-46b6-4b49-aef9-da3959de0ac8/HighBackChair.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
chairHighBack.addComponentOrReplace(gltfShape15)

const steampunkDesk2 = new Entity('steampunkDesk2')
engine.addEntity(steampunkDesk2)
steampunkDesk2.setParent(_scene)
steampunkDesk2.addComponentOrReplace(gltfShape13)
const transform94 = new Transform({
  position: new Vector3(10, 0, 23),
  rotation: new Quaternion(2.973809349812728e-14, -1, 8.940695295223122e-8, -8.940696716308594e-8),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
steampunkDesk2.addComponentOrReplace(transform94)

const chairHighBack2 = new Entity('chairHighBack2')
engine.addEntity(chairHighBack2)
chairHighBack2.setParent(_scene)
chairHighBack2.addComponentOrReplace(gltfShape15)
const transform95 = new Transform({
  position: new Vector3(10.5, 0, 21.5),
  rotation: new Quaternion(9.279464471671252e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
chairHighBack2.addComponentOrReplace(transform95)

const steampunkDesk3 = new Entity('steampunkDesk3')
engine.addEntity(steampunkDesk3)
steampunkDesk3.setParent(_scene)
steampunkDesk3.addComponentOrReplace(gltfShape13)
const transform96 = new Transform({
  position: new Vector3(15, 0, 23),
  rotation: new Quaternion(2.973809349812728e-14, -1, 8.940695295223122e-8, -8.940696716308594e-8),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
steampunkDesk3.addComponentOrReplace(transform96)

const chairHighBack3 = new Entity('chairHighBack3')
engine.addEntity(chairHighBack3)
chairHighBack3.setParent(_scene)
chairHighBack3.addComponentOrReplace(gltfShape15)
const transform97 = new Transform({
  position: new Vector3(15.5, 0, 21.5),
  rotation: new Quaternion(9.279464471671252e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
chairHighBack3.addComponentOrReplace(transform97)

const videoComputerScreen = new Entity('videoComputerScreen')
engine.addEntity(videoComputerScreen)
videoComputerScreen.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(15, 1, 23),
  rotation: new Quaternion(8.175212182291291e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1.0000056028366089, 1, 1.0000056028366089)
})
videoComputerScreen.addComponentOrReplace(transform98)

const videoComputerScreen2 = new Entity('videoComputerScreen2')
engine.addEntity(videoComputerScreen2)
videoComputerScreen2.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(10, 1, 23),
  rotation: new Quaternion(8.175212182291291e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1.0000056028366089, 1, 1.0000056028366089)
})
videoComputerScreen2.addComponentOrReplace(transform99)

const videoComputerScreen3 = new Entity('videoComputerScreen3')
engine.addEntity(videoComputerScreen3)
videoComputerScreen3.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(4.5, 1, 23),
  rotation: new Quaternion(8.175212182291291e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1.0000056028366089, 1, 1.0000056028366089)
})
videoComputerScreen3.addComponentOrReplace(transform100)

const videoScreenStanding2 = new Entity('videoScreenStanding2')
engine.addEntity(videoScreenStanding2)
videoScreenStanding2.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(3.5, 0, 29.5),
  rotation: new Quaternion(-4.6036748813094164e-7, 0.7071068286895752, -1.758665177931107e-7, 0.7071068286895752),
  scale: new Vector3(1.0000039339065552, 1.0099999904632568, 1.0000039339065552)
})
videoScreenStanding2.addComponentOrReplace(transform101)

const grassTile33 = new Entity('grassTile33')
engine.addEntity(grassTile33)
grassTile33.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(37, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.5, 1, 4.875)
})
grassTile33.addComponentOrReplace(transform102)
grassTile33.addComponentOrReplace(gltfShape6)

const grassTile34 = new Entity('grassTile34')
engine.addEntity(grassTile34)
grassTile34.setParent(_scene)
grassTile34.addComponentOrReplace(gltfShape6)
const transform103 = new Transform({
  position: new Vector3(37, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.5, 1, 4.875)
})
grassTile34.addComponentOrReplace(transform103)

const neonRectangleSign = new Entity('neonRectangleSign')
engine.addEntity(neonRectangleSign)
neonRectangleSign.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(32, 3.5, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 4, 1)
})
neonRectangleSign.addComponentOrReplace(transform104)
const gltfShape16 = new GLTFShape("5e74295e-315c-4581-be84-61a8069f1f4d/Neon_Rectangle_Sign.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
neonRectangleSign.addComponentOrReplace(gltfShape16)

const galleryInfoGlass = new Entity('galleryInfoGlass')
engine.addEntity(galleryInfoGlass)
galleryInfoGlass.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(37, 0, 13),
  rotation: new Quaternion(-2.2311382520226225e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.961939811706543, 1.5, 1.038060188293457)
})
galleryInfoGlass.addComponentOrReplace(transform105)

const facebookButtonLink = new Entity('facebookButtonLink')
engine.addEntity(facebookButtonLink)
facebookButtonLink.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(36.5, 0, 9.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000064373016357, 1, 1.0000064373016357)
})
facebookButtonLink.addComponentOrReplace(transform106)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(36.5, 0, 12.5),
  rotation: new Quaternion(-6.661133271656822e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000107288360596, 1, 1.0000107288360596)
})
twitterButtonLink.addComponentOrReplace(transform107)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(36.5, 0, 10.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000121593475342, 1, 1.0000121593475342)
})
instagramButtonLink.addComponentOrReplace(transform108)

const streetClock = new Entity('streetClock')
engine.addEntity(streetClock)
streetClock.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(38, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
streetClock.addComponentOrReplace(transform109)
const gltfShape17 = new GLTFShape("3e718ab8-14e9-4352-a972-620da3ae778c/StreetClock_01/StreetClock_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
streetClock.addComponentOrReplace(gltfShape17)

const signpostTree = new Entity('signpostTree')
engine.addEntity(signpostTree)
signpostTree.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(27, 0, 12),
  rotation: new Quaternion(-3.4335878121316034e-15, 0.9951847195625305, -1.1863524207456067e-7, 0.09801717102527618),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
signpostTree.addComponentOrReplace(transform110)

const wallPlainGlass16 = new Entity('wallPlainGlass16')
engine.addEntity(wallPlainGlass16)
wallPlainGlass16.setParent(_scene)
wallPlainGlass16.addComponentOrReplace(gltfShape2)
const transform111 = new Transform({
  position: new Vector3(15.5, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.499999046325684, 1.125, 0.9999998807907104)
})
wallPlainGlass16.addComponentOrReplace(transform111)

const streetClock2 = new Entity('streetClock2')
engine.addEntity(streetClock2)
streetClock2.setParent(_scene)
streetClock2.addComponentOrReplace(gltfShape17)
const transform112 = new Transform({
  position: new Vector3(10, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
streetClock2.addComponentOrReplace(transform112)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(15.5, 3.5, 40),
  rotation: new Quaternion(-1.718938699367368e-15, 0.70710688829422, -8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(3.7500104904174805, 5, 1.0000025033950806)
})
plainText4.addComponentOrReplace(transform113)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(24, 6, 44.5),
  rotation: new Quaternion(-1.7780280354051832e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(12, 13.5, 3.5000009536743164)
})
plainText5.addComponentOrReplace(transform114)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(11.5, 3, 34),
  rotation: new Quaternion(4.8115236465494805e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(3.75, 4.5, 1)
})
plainText6.addComponentOrReplace(transform115)

const informationTerminal = new Entity('informationTerminal')
engine.addEntity(informationTerminal)
informationTerminal.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(37, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
informationTerminal.addComponentOrReplace(transform116)
const gltfShape18 = new GLTFShape("5e4a922e-50f1-40aa-a1a3-bee660371499/Terminal_01/Terminal_01.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
informationTerminal.addComponentOrReplace(gltfShape18)

const streetMailbox = new Entity('streetMailbox')
engine.addEntity(streetMailbox)
streetMailbox.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(37.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
streetMailbox.addComponentOrReplace(transform117)
const gltfShape19 = new GLTFShape("38832f4a-2a1b-4139-8d73-3146f1261e95/MailPost_01/MailPost_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
streetMailbox.addComponentOrReplace(gltfShape19)

const urbanTrashCan = new Entity('urbanTrashCan')
engine.addEntity(urbanTrashCan)
urbanTrashCan.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(11, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
urbanTrashCan.addComponentOrReplace(transform118)
const gltfShape20 = new GLTFShape("c5daf807-1dde-41e8-a1db-c30f58917457/TrashCan_01/TrashCan_01.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
urbanTrashCan.addComponentOrReplace(gltfShape20)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(36.5, 0, 11.5),
  rotation: new Quaternion(4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000154972076416, 1, 0.5000077486038208)
})
externalLink3.addComponentOrReplace(transform119)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(12.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform120)

const wallPlainGlass19 = new Entity('wallPlainGlass19')
engine.addEntity(wallPlainGlass19)
wallPlainGlass19.setParent(_scene)
wallPlainGlass19.addComponentOrReplace(gltfShape2)
const transform121 = new Transform({
  position: new Vector3(10, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.7499990463256836, 1.125, 0.9999998211860657)
})
wallPlainGlass19.addComponentOrReplace(transform121)

const wallPlainGlass20 = new Entity('wallPlainGlass20')
engine.addEntity(wallPlainGlass20)
wallPlainGlass20.setParent(_scene)
wallPlainGlass20.addComponentOrReplace(gltfShape2)
const transform122 = new Transform({
  position: new Vector3(10.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.7499990463256836, 1.125, 0.9999998211860657)
})
wallPlainGlass20.addComponentOrReplace(transform122)

const wallPlainGlass21 = new Entity('wallPlainGlass21')
engine.addEntity(wallPlainGlass21)
wallPlainGlass21.setParent(_scene)
wallPlainGlass21.addComponentOrReplace(gltfShape2)
const transform123 = new Transform({
  position: new Vector3(13, 0, 15),
  rotation: new Quaternion(-0.7071067690849304, -1.053671283557378e-8, 7.375696498002071e-8, 0.7071068286895752),
  scale: new Vector3(3.7499990463256836, 1.125, 0.9999998211860657)
})
wallPlainGlass21.addComponentOrReplace(transform123)

const wallPlainGlass22 = new Entity('wallPlainGlass22')
engine.addEntity(wallPlainGlass22)
wallPlainGlass22.setParent(_scene)
wallPlainGlass22.addComponentOrReplace(gltfShape2)
const transform124 = new Transform({
  position: new Vector3(10, 4.5, 10),
  rotation: new Quaternion(0.7071068286895752, 4.1028494548831114e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.7499990463256836, 1.6875122785568237, 1.0000035762786865)
})
wallPlainGlass22.addComponentOrReplace(transform124)

const grassTile35 = new Entity('grassTile35')
engine.addEntity(grassTile35)
grassTile35.setParent(_scene)
grassTile35.addComponentOrReplace(gltfShape6)
const transform125 = new Transform({
  position: new Vector3(17, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 1, 1)
})
grassTile35.addComponentOrReplace(transform125)

const galleryInfoBlack2 = new Entity('galleryInfoBlack2')
engine.addEntity(galleryInfoBlack2)
galleryInfoBlack2.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(17, 0, 8.5),
  rotation: new Quaternion(1.1664156138624805e-14, 0.2902850806713104, -3.460467823401814e-8, 0.9569402933120728),
  scale: new Vector3(1.000004768371582, 1, 1.000004768371582)
})
galleryInfoBlack2.addComponentOrReplace(transform126)

const grassTile36 = new Entity('grassTile36')
engine.addEntity(grassTile36)
grassTile36.setParent(_scene)
grassTile36.addComponentOrReplace(gltfShape6)
const transform127 = new Transform({
  position: new Vector3(17, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 1, 1)
})
grassTile36.addComponentOrReplace(transform127)

const grassTile37 = new Entity('grassTile37')
engine.addEntity(grassTile37)
grassTile37.setParent(_scene)
grassTile37.addComponentOrReplace(gltfShape6)
const transform128 = new Transform({
  position: new Vector3(17, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 1, 1)
})
grassTile37.addComponentOrReplace(transform128)

const grassTile38 = new Entity('grassTile38')
engine.addEntity(grassTile38)
grassTile38.setParent(_scene)
grassTile38.addComponentOrReplace(gltfShape6)
const transform129 = new Transform({
  position: new Vector3(17, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6, 1, 1)
})
grassTile38.addComponentOrReplace(transform129)

const signpostGolden4 = new Entity('signpostGolden4')
engine.addEntity(signpostGolden4)
signpostGolden4.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(21, 0, 9),
  rotation: new Quaternion(9.476975852540026e-17, -1, 1.1920926823449918e-7, -2.9802318834981634e-8),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
})
signpostGolden4.addComponentOrReplace(transform130)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(10.5, 4, 13.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000002384185791, 1, 1.0000007152557373)
})
plainText2.addComponentOrReplace(transform131)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(12, 0.5, 11.5),
  rotation: new Quaternion(1.4590337334033192e-14, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
externalLink4.addComponentOrReplace(transform132)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(12, 0.5, 12.5),
  rotation: new Quaternion(1.4590337334033192e-14, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
externalLink5.addComponentOrReplace(transform133)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(12, 0.5, 13.5),
  rotation: new Quaternion(1.4590337334033192e-14, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
externalLink6.addComponentOrReplace(transform134)

const tableWithChairs2 = new Entity('tableWithChairs2')
engine.addEntity(tableWithChairs2)
tableWithChairs2.setParent(_scene)
tableWithChairs2.addComponentOrReplace(gltfShape14)
const transform135 = new Transform({
  position: new Vector3(7, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWithChairs2.addComponentOrReplace(transform135)

const plainText7 = new Entity('plainText7')
engine.addEntity(plainText7)
plainText7.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(10.5, 3.5, 13.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000035047531128, 1, 1.0000073909759521)
})
plainText7.addComponentOrReplace(transform136)

const blockFloorLight3 = new Entity('blockFloorLight3')
engine.addEntity(blockFloorLight3)
blockFloorLight3.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(12, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blockFloorLight3.addComponentOrReplace(transform137)

const blockFloorLight4 = new Entity('blockFloorLight4')
engine.addEntity(blockFloorLight4)
blockFloorLight4.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(12, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blockFloorLight4.addComponentOrReplace(transform138)

const couchTwoSeater = new Entity('couchTwoSeater')
engine.addEntity(couchTwoSeater)
couchTwoSeater.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(16.5, 0, 15),
  rotation: new Quaternion(3.7915032780598025e-15, -1, 1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
couchTwoSeater.addComponentOrReplace(transform139)
const gltfShape21 = new GLTFShape("c28761f2-759f-4b9a-b497-9dfcabf3aa3f/TwoSeater_Couch.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
couchTwoSeater.addComponentOrReplace(gltfShape21)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(18, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.625, 3, 1)
})
messageBubble.addComponentOrReplace(transform140)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
const script16 = new Script16()
const script17 = new Script17()
script1.init()
script2.init()
script3.init()
script4.init()
script5.init()
script6.init()
script7.init()
script8.init()
script9.init()
script10.init()
script11.init()
script12.init()
script13.init()
script14.init()
script15.init()
script16.init()
script17.init()
script1.spawn(plainText, {"text":"FIDELITY INVESTMENTS","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script2.spawn(videoScreenStanding, {"startOn":true,"onClickText":"PLEASE CHECK BELOW URL","volume":1,"onClick":[{"entityName":"externalLink","actionId":"activate","values":{}}],"station":"https://theuniverse.club/live/genesisplaza/index.m3u8","image":""}, createChannel(channelId, videoScreenStanding, channelBus))
script3.spawn(externalLink, {"url":"https://www.youtube.com/watch?v=w_Ma8oQLmSM","name":"FOR LIVE ABC NEWS. CLICK!"}, createChannel(channelId, externalLink, channelBus))
script4.spawn(signpostDirections2, {"textTop":"Welcome to FMR","textLower":"Way to Free Coffee","fontSize":20}, createChannel(channelId, signpostDirections2, channelBus))
script5.spawn(signpostGolden, {"text":"CONFERENCE ROOM","fontSize":20}, createChannel(channelId, signpostGolden, channelBus))
script6.spawn(cyberpunkDoor, {"onClickText":"Tap to Open","onClick":[{"entityName":"cyberpunkDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, cyberpunkDoor, channelBus))
script7.spawn(blockFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script7.spawn(blockFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script8.spawn(galleryInfoBlack, {"text":"FBT INNOVATION","fontSize":6,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoBlack, channelBus))
script3.spawn(externalLink2, {"url":"https://www.swiggy.com/restaurants","name":"WANNA GRAB FREE COFFEE"}, createChannel(channelId, externalLink2, channelBus))
script5.spawn(signpostGolden2, {"text":"WAY TO FREE COFFEE","fontSize":15.5}, createChannel(channelId, signpostGolden2, channelBus))
script1.spawn(plainText3, {"text":"CONFERENCE ROOM","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script9.spawn(scoreboard, {"initialVal":0,"threshold":100,"enabled":true}, createChannel(channelId, scoreboard, channelBus))
script5.spawn(signpostGolden3, {"text":"PLAY ARENA","fontSize":17.5}, createChannel(channelId, signpostGolden3, channelBus))
script10.spawn(videoComputerScreen, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen, channelBus))
script10.spawn(videoComputerScreen2, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen2","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen2, channelBus))
script10.spawn(videoComputerScreen3, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen3","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen3, channelBus))
script2.spawn(videoScreenStanding2, {"startOn":true,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding2","actionId":"toggle","values":{}}],"image":"https://dummyimage.com/3840x2160/000/fff.png&text=Welcome+To+FBT+INNOVATION"}, createChannel(channelId, videoScreenStanding2, channelBus))
script11.spawn(galleryInfoGlass, {"text":"WELCOME FBT INNOVATION \n\nPLEASE CHECK BELOW LINKS","fontSize":5,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoGlass, channelBus))
script12.spawn(facebookButtonLink, {"url":"fidelityinvestments","bnw":false}, createChannel(channelId, facebookButtonLink, channelBus))
script13.spawn(twitterButtonLink, {"url":"Fidelity","bnw":false}, createChannel(channelId, twitterButtonLink, channelBus))
script14.spawn(instagramButtonLink, {"url":"fidelity","bnw":false}, createChannel(channelId, instagramButtonLink, channelBus))
script15.spawn(signpostTree, {"text":"FMR WORLD ","fontSize":22}, createChannel(channelId, signpostTree, channelBus))
script1.spawn(plainText4, {"text":"COFFEE BREAKOUT","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText4, channelBus))
script1.spawn(plainText5, {"text":"FBT INNOVATION LAB","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText5, channelBus))
script1.spawn(plainText6, {"text":"FBT INNOVATIONS","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script3.spawn(externalLink3, {"url":"https://www.youtube.com/watch?v=KkHqNv_r9cQ","name":"FIDELITY LAND"}, createChannel(channelId, externalLink3, channelBus))
script16.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script8.spawn(galleryInfoBlack2, {"text":"FBT INNOVATION:POC HIGHLIGHTS\nFEEL THE EXPERIENCE\n\nPLEASE CHECK THE LINKS","fontSize":3.5,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoBlack2, channelBus))
script5.spawn(signpostGolden4, {"text":"FBT POC","fontSize":25}, createChannel(channelId, signpostGolden4, channelBus))
script1.spawn(plainText2, {"text":"FBT INNOVATION","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText2, channelBus))
script3.spawn(externalLink4, {"url":"https://projects.invisionapp.com/share/MD10MM70C4GA#/screens/449134727","name":"Trendster"}, createChannel(channelId, externalLink4, channelBus))
script3.spawn(externalLink5, {"url":"https://projects.invisionapp.com/prototype/WealthscapeUX-2-0-ckgj9gt540040q401x9f9btv9/play/63307527","name":"Wealthscape onboarding "}, createChannel(channelId, externalLink5, channelBus))
script3.spawn(externalLink6, {"url":"https://vinay125876.invisionapp.com/prototype/FID-MEET-W-ckc23ojit00876a01fg3z9k45/play/6419e68e","name":"Fidmeet solution"}, createChannel(channelId, externalLink6, channelBus))
script1.spawn(plainText7, {"text":"FEEL THE EXPERIENCE","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText7, channelBus))
script7.spawn(blockFloorLight3, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight3, channelBus))
script7.spawn(blockFloorLight4, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight4, channelBus))
script17.spawn(messageBubble, {"text":"LET'S TALK CRYPTO!!!!","fontSize":14.5}, createChannel(channelId, messageBubble, channelBus))