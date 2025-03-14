# `rmsResourceRecorderV1` Submodule <a name="`rmsResourceRecorderV1` Submodule" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RmsResourceRecorderV1 <a name="RmsResourceRecorderV1" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1 opentelekomcloud_rms_resource_recorder_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

new rmsResourceRecorderV1.RmsResourceRecorderV1(scope: Construct, id: string, config: RmsResourceRecorderV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config">RmsResourceRecorderV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config">RmsResourceRecorderV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel">putObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel">putSmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel">resetObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel">resetSmnChannel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putObsChannel` <a name="putObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel"></a>

```typescript
public putObsChannel(value: RmsResourceRecorderV1ObsChannel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector"></a>

```typescript
public putSelector(value: RmsResourceRecorderV1Selector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `putSmnChannel` <a name="putSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel"></a>

```typescript
public putSmnChannel(value: RmsResourceRecorderV1SmnChannel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObsChannel` <a name="resetObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel"></a>

```typescript
public resetObsChannel(): void
```

##### `resetSmnChannel` <a name="resetSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel"></a>

```typescript
public resetSmnChannel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RmsResourceRecorderV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RmsResourceRecorderV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RmsResourceRecorderV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel">obsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel">smnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput">agencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput">obsChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput">selectorInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput">smnChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName">agencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `obsChannel`<sup>Required</sup> <a name="obsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel"></a>

```typescript
public readonly obsChannel: RmsResourceRecorderV1ObsChannelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a>

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector"></a>

```typescript
public readonly selector: RmsResourceRecorderV1SelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a>

---

##### `smnChannel`<sup>Required</sup> <a name="smnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel"></a>

```typescript
public readonly smnChannel: RmsResourceRecorderV1SmnChannelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a>

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput"></a>

```typescript
public readonly agencyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `obsChannelInput`<sup>Optional</sup> <a name="obsChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput"></a>

```typescript
public readonly obsChannelInput: RmsResourceRecorderV1ObsChannel;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput"></a>

```typescript
public readonly selectorInput: RmsResourceRecorderV1Selector;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `smnChannelInput`<sup>Optional</sup> <a name="smnChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput"></a>

```typescript
public readonly smnChannelInput: RmsResourceRecorderV1SmnChannel;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RmsResourceRecorderV1Config <a name="RmsResourceRecorderV1Config" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

const rmsResourceRecorderV1Config: rmsResourceRecorderV1.RmsResourceRecorderV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName">agencyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel">obsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | obs_channel block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel">smnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | smn_channel block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector"></a>

```typescript
public readonly selector: RmsResourceRecorderV1Selector;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#selector RmsResourceRecorderV1#selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `obsChannel`<sup>Optional</sup> <a name="obsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel"></a>

```typescript
public readonly obsChannel: RmsResourceRecorderV1ObsChannel;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

obs_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#obs_channel RmsResourceRecorderV1#obs_channel}

---

##### `smnChannel`<sup>Optional</sup> <a name="smnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel"></a>

```typescript
public readonly smnChannel: RmsResourceRecorderV1SmnChannel;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

smn_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#smn_channel RmsResourceRecorderV1#smn_channel}

---

### RmsResourceRecorderV1ObsChannel <a name="RmsResourceRecorderV1ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

const rmsResourceRecorderV1ObsChannel: rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}.

---

### RmsResourceRecorderV1Selector <a name="RmsResourceRecorderV1Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

const rmsResourceRecorderV1Selector: rmsResourceRecorderV1.RmsResourceRecorderV1Selector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported">allSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}. |

---

##### `allSupported`<sup>Required</sup> <a name="allSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported"></a>

```typescript
public readonly allSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}.

---

### RmsResourceRecorderV1SmnChannel <a name="RmsResourceRecorderV1SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

const rmsResourceRecorderV1SmnChannel: rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn">topicUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}. |

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn"></a>

```typescript
public readonly topicUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}.

---

## Classes <a name="Classes" id="Classes"></a>

### RmsResourceRecorderV1ObsChannelOutputReference <a name="RmsResourceRecorderV1ObsChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

new rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RmsResourceRecorderV1ObsChannel;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---


### RmsResourceRecorderV1SelectorOutputReference <a name="RmsResourceRecorderV1SelectorOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

new rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput">allSupportedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported">allSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allSupportedInput`<sup>Optional</sup> <a name="allSupportedInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput"></a>

```typescript
public readonly allSupportedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `allSupported`<sup>Required</sup> <a name="allSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported"></a>

```typescript
public readonly allSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RmsResourceRecorderV1Selector;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---


### RmsResourceRecorderV1SmnChannelOutputReference <a name="RmsResourceRecorderV1SmnChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer"></a>

```typescript
import { rmsResourceRecorderV1 } from '@cdktf/provider-opentelekomcloud'

new rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput">topicUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn">topicUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `topicUrnInput`<sup>Optional</sup> <a name="topicUrnInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput"></a>

```typescript
public readonly topicUrnInput: string;
```

- *Type:* string

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn"></a>

```typescript
public readonly topicUrn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RmsResourceRecorderV1SmnChannel;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---



