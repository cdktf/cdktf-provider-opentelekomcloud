# `vpcEipV1` Submodule <a name="`vpcEipV1` Submodule" id="@cdktf/provider-opentelekomcloud.vpcEipV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEipV1 <a name="VpcEipV1" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1 opentelekomcloud_vpc_eip_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

new vpcEipV1.VpcEipV1(scope: Construct, id: string, config: VpcEipV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config">VpcEipV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config">VpcEipV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putBandwidth">putBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putPublicip">putPublicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetUnbindPort">resetUnbindPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBandwidth` <a name="putBandwidth" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putBandwidth"></a>

```typescript
public putBandwidth(value: VpcEipV1Bandwidth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth">VpcEipV1Bandwidth</a>

---

##### `putPublicip` <a name="putPublicip" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putPublicip"></a>

```typescript
public putPublicip(value: VpcEipV1Publicip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putPublicip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip">VpcEipV1Publicip</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcEipV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts">VpcEipV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnbindPort` <a name="resetUnbindPort" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetUnbindPort"></a>

```typescript
public resetUnbindPort(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEipV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isConstruct"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

vpcEipV1.VpcEipV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isTerraformElement"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

vpcEipV1.VpcEipV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isTerraformResource"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

vpcEipV1.VpcEipV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.generateConfigForImport"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

vpcEipV1.VpcEipV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcEipV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcEipV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcEipV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcEipV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference">VpcEipV1BandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.publicip">publicip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference">VpcEipV1PublicipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference">VpcEipV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.bandwidthInput">bandwidthInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth">VpcEipV1Bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.publicipInput">publicipInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip">VpcEipV1Publicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts">VpcEipV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.unbindPortInput">unbindPortInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.unbindPort">unbindPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.bandwidth"></a>

```typescript
public readonly bandwidth: VpcEipV1BandwidthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference">VpcEipV1BandwidthOutputReference</a>

---

##### `publicip`<sup>Required</sup> <a name="publicip" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.publicip"></a>

```typescript
public readonly publicip: VpcEipV1PublicipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference">VpcEipV1PublicipOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.timeouts"></a>

```typescript
public readonly timeouts: VpcEipV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference">VpcEipV1TimeoutsOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: VpcEipV1Bandwidth;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth">VpcEipV1Bandwidth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `publicipInput`<sup>Optional</sup> <a name="publicipInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.publicipInput"></a>

```typescript
public readonly publicipInput: VpcEipV1Publicip;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip">VpcEipV1Publicip</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcEipV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts">VpcEipV1Timeouts</a>

---

##### `unbindPortInput`<sup>Optional</sup> <a name="unbindPortInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.unbindPortInput"></a>

```typescript
public readonly unbindPortInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `unbindPort`<sup>Required</sup> <a name="unbindPort" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.unbindPort"></a>

```typescript
public readonly unbindPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEipV1Bandwidth <a name="VpcEipV1Bandwidth" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

const vpcEipV1Bandwidth: vpcEipV1.VpcEipV1Bandwidth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#name VpcEipV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.shareType">shareType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#share_type VpcEipV1#share_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#size VpcEipV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.chargeMode">chargeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#charge_mode VpcEipV1#charge_mode}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#name VpcEipV1#name}.

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#share_type VpcEipV1#share_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#size VpcEipV1#size}.

---

##### `chargeMode`<sup>Optional</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#charge_mode VpcEipV1#charge_mode}.

---

### VpcEipV1Config <a name="VpcEipV1Config" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

const vpcEipV1Config: vpcEipV1.VpcEipV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth">VpcEipV1Bandwidth</a></code> | bandwidth block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.publicip">publicip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip">VpcEipV1Publicip</a></code> | publicip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#id VpcEipV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#region VpcEipV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#tags VpcEipV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts">VpcEipV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.unbindPort">unbindPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#unbind_port VpcEipV1#unbind_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#value_specs VpcEipV1#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.bandwidth"></a>

```typescript
public readonly bandwidth: VpcEipV1Bandwidth;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth">VpcEipV1Bandwidth</a>

bandwidth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#bandwidth VpcEipV1#bandwidth}

---

##### `publicip`<sup>Required</sup> <a name="publicip" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.publicip"></a>

```typescript
public readonly publicip: VpcEipV1Publicip;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip">VpcEipV1Publicip</a>

publicip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#publicip VpcEipV1#publicip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#id VpcEipV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#region VpcEipV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#tags VpcEipV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: VpcEipV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts">VpcEipV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#timeouts VpcEipV1#timeouts}

---

##### `unbindPort`<sup>Optional</sup> <a name="unbindPort" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.unbindPort"></a>

```typescript
public readonly unbindPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#unbind_port VpcEipV1#unbind_port}.

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#value_specs VpcEipV1#value_specs}.

---

### VpcEipV1Publicip <a name="VpcEipV1Publicip" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

const vpcEipV1Publicip: vpcEipV1.VpcEipV1Publicip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#type VpcEipV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#ip_address VpcEipV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#name VpcEipV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.portId">portId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#port_id VpcEipV1#port_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#type VpcEipV1#type}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#ip_address VpcEipV1#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#name VpcEipV1#name}.

---

##### `portId`<sup>Optional</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#port_id VpcEipV1#port_id}.

---

### VpcEipV1Timeouts <a name="VpcEipV1Timeouts" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

const vpcEipV1Timeouts: vpcEipV1.VpcEipV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#create VpcEipV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#delete VpcEipV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#create VpcEipV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/vpc_eip_v1#delete VpcEipV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEipV1BandwidthOutputReference <a name="VpcEipV1BandwidthOutputReference" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

new vpcEipV1.VpcEipV1BandwidthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.resetChargeMode">resetChargeMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChargeMode` <a name="resetChargeMode" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.resetChargeMode"></a>

```typescript
public resetChargeMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.chargeModeInput">chargeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.chargeMode">chargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth">VpcEipV1Bandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chargeModeInput`<sup>Optional</sup> <a name="chargeModeInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.chargeModeInput"></a>

```typescript
public readonly chargeModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.shareTypeInput"></a>

```typescript
public readonly shareTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1BandwidthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcEipV1Bandwidth;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Bandwidth">VpcEipV1Bandwidth</a>

---


### VpcEipV1PublicipOutputReference <a name="VpcEipV1PublicipOutputReference" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

new vpcEipV1.VpcEipV1PublicipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resetPortId">resetPortId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortId` <a name="resetPortId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.resetPortId"></a>

```typescript
public resetPortId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.portIdInput">portIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.portId">portId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip">VpcEipV1Publicip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portIdInput`<sup>Optional</sup> <a name="portIdInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.portIdInput"></a>

```typescript
public readonly portIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portId`<sup>Required</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1PublicipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcEipV1Publicip;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Publicip">VpcEipV1Publicip</a>

---


### VpcEipV1TimeoutsOutputReference <a name="VpcEipV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcEipV1 } from '@cdktf/provider-opentelekomcloud'

new vpcEipV1.VpcEipV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts">VpcEipV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcEipV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcEipV1.VpcEipV1Timeouts">VpcEipV1Timeouts</a>

---



