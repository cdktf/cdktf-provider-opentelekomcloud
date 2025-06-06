# `dcVirtualInterfacePeerV3` Submodule <a name="`dcVirtualInterfacePeerV3` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfacePeerV3 <a name="DcVirtualInterfacePeerV3" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3 opentelekomcloud_dc_virtual_interface_peer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer"></a>

```typescript
import { dcVirtualInterfacePeerV3 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3(scope: Construct, id: string, config: DcVirtualInterfacePeerV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config">DcVirtualInterfacePeerV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config">DcVirtualInterfacePeerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpAsn">resetBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpMd5">resetBgpMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetRouteMode">resetRouteMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBgpAsn` <a name="resetBgpAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpAsn"></a>

```typescript
public resetBgpAsn(): void
```

##### `resetBgpMd5` <a name="resetBgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpMd5"></a>

```typescript
public resetBgpMd5(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRouteMode` <a name="resetRouteMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetRouteMode"></a>

```typescript
public resetRouteMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualInterfacePeerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct"></a>

```typescript
import { dcVirtualInterfacePeerV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement"></a>

```typescript
import { dcVirtualInterfacePeerV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource"></a>

```typescript
import { dcVirtualInterfacePeerV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport"></a>

```typescript
import { dcVirtualInterfacePeerV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DcVirtualInterfacePeerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcVirtualInterfacePeerV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcVirtualInterfacePeerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfacePeerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpRouteLimit">bgpRouteLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpStatus">bgpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableBfd">enableBfd</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableNqa">enableNqa</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.receiveRouteNum">receiveRouteNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.serviceEpGroup">serviceEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsnInput">bgpAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5Input">bgpMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIpInput">localGatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroupInput">remoteEpGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIpInput">remoteGatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeModeInput">routeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifIdInput">vifIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5">bgpMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIp">localGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroup">remoteEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIp">remoteGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeMode">routeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifId">vifId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bgpRouteLimit`<sup>Required</sup> <a name="bgpRouteLimit" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpRouteLimit"></a>

```typescript
public readonly bgpRouteLimit: number;
```

- *Type:* number

---

##### `bgpStatus`<sup>Required</sup> <a name="bgpStatus" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpStatus"></a>

```typescript
public readonly bgpStatus: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `enableBfd`<sup>Required</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableBfd"></a>

```typescript
public readonly enableBfd: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableNqa`<sup>Required</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableNqa"></a>

```typescript
public readonly enableNqa: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `receiveRouteNum`<sup>Required</sup> <a name="receiveRouteNum" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.receiveRouteNum"></a>

```typescript
public readonly receiveRouteNum: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceEpGroup`<sup>Required</sup> <a name="serviceEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.serviceEpGroup"></a>

```typescript
public readonly serviceEpGroup: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsnInput"></a>

```typescript
public readonly bgpAsnInput: number;
```

- *Type:* number

---

##### `bgpMd5Input`<sup>Optional</sup> <a name="bgpMd5Input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5Input"></a>

```typescript
public readonly bgpMd5Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localGatewayIpInput`<sup>Optional</sup> <a name="localGatewayIpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIpInput"></a>

```typescript
public readonly localGatewayIpInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteEpGroupInput`<sup>Optional</sup> <a name="remoteEpGroupInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroupInput"></a>

```typescript
public readonly remoteEpGroupInput: string[];
```

- *Type:* string[]

---

##### `remoteGatewayIpInput`<sup>Optional</sup> <a name="remoteGatewayIpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIpInput"></a>

```typescript
public readonly remoteGatewayIpInput: string;
```

- *Type:* string

---

##### `routeModeInput`<sup>Optional</sup> <a name="routeModeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeModeInput"></a>

```typescript
public readonly routeModeInput: string;
```

- *Type:* string

---

##### `vifIdInput`<sup>Optional</sup> <a name="vifIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifIdInput"></a>

```typescript
public readonly vifIdInput: string;
```

- *Type:* string

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

---

##### `bgpMd5`<sup>Required</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5"></a>

```typescript
public readonly bgpMd5: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localGatewayIp`<sup>Required</sup> <a name="localGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIp"></a>

```typescript
public readonly localGatewayIp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteEpGroup`<sup>Required</sup> <a name="remoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroup"></a>

```typescript
public readonly remoteEpGroup: string[];
```

- *Type:* string[]

---

##### `remoteGatewayIp`<sup>Required</sup> <a name="remoteGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIp"></a>

```typescript
public readonly remoteGatewayIp: string;
```

- *Type:* string

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

---

##### `vifId`<sup>Required</sup> <a name="vifId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifId"></a>

```typescript
public readonly vifId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfacePeerV3Config <a name="DcVirtualInterfacePeerV3Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.Initializer"></a>

```typescript
import { dcVirtualInterfacePeerV3 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualInterfacePeerV3Config: dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.localGatewayIp">localGatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteEpGroup">remoteEpGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteGatewayIp">remoteGatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.vifId">vifId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpMd5">bgpMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.routeMode">routeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}.

---

##### `localGatewayIp`<sup>Required</sup> <a name="localGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.localGatewayIp"></a>

```typescript
public readonly localGatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}.

---

##### `remoteEpGroup`<sup>Required</sup> <a name="remoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteEpGroup"></a>

```typescript
public readonly remoteEpGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}.

---

##### `remoteGatewayIp`<sup>Required</sup> <a name="remoteGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteGatewayIp"></a>

```typescript
public readonly remoteGatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}.

---

##### `vifId`<sup>Required</sup> <a name="vifId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.vifId"></a>

```typescript
public readonly vifId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}.

---

##### `bgpAsn`<sup>Optional</sup> <a name="bgpAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}.

---

##### `bgpMd5`<sup>Optional</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpMd5"></a>

```typescript
public readonly bgpMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routeMode`<sup>Optional</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}.

---



