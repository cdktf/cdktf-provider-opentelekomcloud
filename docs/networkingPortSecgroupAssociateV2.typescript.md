# `networkingPortSecgroupAssociateV2` Submodule <a name="`networkingPortSecgroupAssociateV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingPortSecgroupAssociateV2 <a name="NetworkingPortSecgroupAssociateV2" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2 opentelekomcloud_networking_port_secgroup_associate_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.Initializer"></a>

```typescript
import { networkingPortSecgroupAssociateV2 } from '@cdktf/provider-opentelekomcloud'

new networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2(scope: Construct, id: string, config: NetworkingPortSecgroupAssociateV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config">NetworkingPortSecgroupAssociateV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config">NetworkingPortSecgroupAssociateV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetForce` <a name="resetForce" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingPortSecgroupAssociateV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isConstruct"></a>

```typescript
import { networkingPortSecgroupAssociateV2 } from '@cdktf/provider-opentelekomcloud'

networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformElement"></a>

```typescript
import { networkingPortSecgroupAssociateV2 } from '@cdktf/provider-opentelekomcloud'

networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformResource"></a>

```typescript
import { networkingPortSecgroupAssociateV2 } from '@cdktf/provider-opentelekomcloud'

networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.generateConfigForImport"></a>

```typescript
import { networkingPortSecgroupAssociateV2 } from '@cdktf/provider-opentelekomcloud'

networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkingPortSecgroupAssociateV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkingPortSecgroupAssociateV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkingPortSecgroupAssociateV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingPortSecgroupAssociateV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.allSecurityGroupIds">allSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.forceInput">forceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.portIdInput">portIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.portId">portId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allSecurityGroupIds`<sup>Required</sup> <a name="allSecurityGroupIds" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.allSecurityGroupIds"></a>

```typescript
public readonly allSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portIdInput`<sup>Optional</sup> <a name="portIdInput" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.portIdInput"></a>

```typescript
public readonly portIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portId`<sup>Required</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingPortSecgroupAssociateV2Config <a name="NetworkingPortSecgroupAssociateV2Config" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.Initializer"></a>

```typescript
import { networkingPortSecgroupAssociateV2 } from '@cdktf/provider-opentelekomcloud'

const networkingPortSecgroupAssociateV2Config: networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.portId">portId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#port_id NetworkingPortSecgroupAssociateV2#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#security_group_ids NetworkingPortSecgroupAssociateV2#security_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#force NetworkingPortSecgroupAssociateV2#force}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#id NetworkingPortSecgroupAssociateV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#region NetworkingPortSecgroupAssociateV2#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `portId`<sup>Required</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#port_id NetworkingPortSecgroupAssociateV2#port_id}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#security_group_ids NetworkingPortSecgroupAssociateV2#security_group_ids}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#force NetworkingPortSecgroupAssociateV2#force}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#id NetworkingPortSecgroupAssociateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingPortSecgroupAssociateV2.NetworkingPortSecgroupAssociateV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/networking_port_secgroup_associate_v2#region NetworkingPortSecgroupAssociateV2#region}.

---



