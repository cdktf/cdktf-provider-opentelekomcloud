# `cbrPolicyV3` Submodule <a name="`cbrPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrPolicyV3 <a name="CbrPolicyV3" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3 opentelekomcloud_cbr_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

new cbrPolicyV3.CbrPolicyV3(scope: Construct, id: string, config: CbrPolicyV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config">CbrPolicyV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config">CbrPolicyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition">putOperationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationProjectId">resetDestinationProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOperationDefinition">resetOperationDefinition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperationDefinition` <a name="putOperationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition"></a>

```typescript
public putOperationDefinition(value: CbrPolicyV3OperationDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---

##### `resetDestinationProjectId` <a name="resetDestinationProjectId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationProjectId"></a>

```typescript
public resetDestinationProjectId(): void
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationRegion"></a>

```typescript
public resetDestinationRegion(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperationDefinition` <a name="resetOperationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOperationDefinition"></a>

```typescript
public resetOperationDefinition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CbrPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

cbrPolicyV3.CbrPolicyV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

cbrPolicyV3.CbrPolicyV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

cbrPolicyV3.CbrPolicyV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

cbrPolicyV3.CbrPolicyV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CbrPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CbrPolicyV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CbrPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CbrPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinition">operationDefinition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference">CbrPolicyV3OperationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectIdInput">destinationProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegionInput">destinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinitionInput">operationDefinitionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationTypeInput">operationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPatternInput">triggerPatternInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectId">destinationProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPattern">triggerPattern</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operationDefinition`<sup>Required</sup> <a name="operationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinition"></a>

```typescript
public readonly operationDefinition: CbrPolicyV3OperationDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference">CbrPolicyV3OperationDefinitionOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `destinationProjectIdInput`<sup>Optional</sup> <a name="destinationProjectIdInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectIdInput"></a>

```typescript
public readonly destinationProjectIdInput: string;
```

- *Type:* string

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegionInput"></a>

```typescript
public readonly destinationRegionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationDefinitionInput`<sup>Optional</sup> <a name="operationDefinitionInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinitionInput"></a>

```typescript
public readonly operationDefinitionInput: CbrPolicyV3OperationDefinition;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---

##### `operationTypeInput`<sup>Optional</sup> <a name="operationTypeInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationTypeInput"></a>

```typescript
public readonly operationTypeInput: string;
```

- *Type:* string

---

##### `triggerPatternInput`<sup>Optional</sup> <a name="triggerPatternInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPatternInput"></a>

```typescript
public readonly triggerPatternInput: string[];
```

- *Type:* string[]

---

##### `destinationProjectId`<sup>Required</sup> <a name="destinationProjectId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectId"></a>

```typescript
public readonly destinationProjectId: string;
```

- *Type:* string

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPattern"></a>

```typescript
public readonly triggerPattern: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CbrPolicyV3Config <a name="CbrPolicyV3Config" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.Initializer"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

const cbrPolicyV3Config: cbrPolicyV3.CbrPolicyV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationType">operationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.triggerPattern">triggerPattern</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationProjectId">destinationProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#destination_project_id CbrPolicyV3#destination_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#destination_region CbrPolicyV3#destination_region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationDefinition">operationDefinition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | operation_definition block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}.

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}.

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.triggerPattern"></a>

```typescript
public readonly triggerPattern: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}.

---

##### `destinationProjectId`<sup>Optional</sup> <a name="destinationProjectId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationProjectId"></a>

```typescript
public readonly destinationProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#destination_project_id CbrPolicyV3#destination_project_id}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#destination_region CbrPolicyV3#destination_region}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationDefinition`<sup>Optional</sup> <a name="operationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationDefinition"></a>

```typescript
public readonly operationDefinition: CbrPolicyV3OperationDefinition;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

operation_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#operation_definition CbrPolicyV3#operation_definition}

---

### CbrPolicyV3OperationDefinition <a name="CbrPolicyV3OperationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.Initializer"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

const cbrPolicyV3OperationDefinition: cbrPolicyV3.CbrPolicyV3OperationDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#timezone CbrPolicyV3#timezone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.dayBackups">dayBackups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.maxBackups">maxBackups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.monthBackups">monthBackups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.weekBackups">weekBackups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.yearBackups">yearBackups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}. |

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#timezone CbrPolicyV3#timezone}.

---

##### `dayBackups`<sup>Optional</sup> <a name="dayBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.dayBackups"></a>

```typescript
public readonly dayBackups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}.

---

##### `maxBackups`<sup>Optional</sup> <a name="maxBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.maxBackups"></a>

```typescript
public readonly maxBackups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}.

---

##### `monthBackups`<sup>Optional</sup> <a name="monthBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.monthBackups"></a>

```typescript
public readonly monthBackups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}.

---

##### `retentionDurationDays`<sup>Optional</sup> <a name="retentionDurationDays" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}.

---

##### `weekBackups`<sup>Optional</sup> <a name="weekBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.weekBackups"></a>

```typescript
public readonly weekBackups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}.

---

##### `yearBackups`<sup>Optional</sup> <a name="yearBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.yearBackups"></a>

```typescript
public readonly yearBackups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrPolicyV3OperationDefinitionOutputReference <a name="CbrPolicyV3OperationDefinitionOutputReference" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer"></a>

```typescript
import { cbrPolicyV3 } from '@cdktf/provider-opentelekomcloud'

new cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetDayBackups">resetDayBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMaxBackups">resetMaxBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMonthBackups">resetMonthBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetRetentionDurationDays">resetRetentionDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetWeekBackups">resetWeekBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetYearBackups">resetYearBackups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayBackups` <a name="resetDayBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetDayBackups"></a>

```typescript
public resetDayBackups(): void
```

##### `resetMaxBackups` <a name="resetMaxBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMaxBackups"></a>

```typescript
public resetMaxBackups(): void
```

##### `resetMonthBackups` <a name="resetMonthBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMonthBackups"></a>

```typescript
public resetMonthBackups(): void
```

##### `resetRetentionDurationDays` <a name="resetRetentionDurationDays" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetRetentionDurationDays"></a>

```typescript
public resetRetentionDurationDays(): void
```

##### `resetWeekBackups` <a name="resetWeekBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetWeekBackups"></a>

```typescript
public resetWeekBackups(): void
```

##### `resetYearBackups` <a name="resetYearBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetYearBackups"></a>

```typescript
public resetYearBackups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackupsInput">dayBackupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackupsInput">maxBackupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackupsInput">monthBackupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDaysInput">retentionDurationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackupsInput">weekBackupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackupsInput">yearBackupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackups">dayBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackups">maxBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackups">monthBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackups">weekBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackups">yearBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayBackupsInput`<sup>Optional</sup> <a name="dayBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackupsInput"></a>

```typescript
public readonly dayBackupsInput: number;
```

- *Type:* number

---

##### `maxBackupsInput`<sup>Optional</sup> <a name="maxBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackupsInput"></a>

```typescript
public readonly maxBackupsInput: number;
```

- *Type:* number

---

##### `monthBackupsInput`<sup>Optional</sup> <a name="monthBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackupsInput"></a>

```typescript
public readonly monthBackupsInput: number;
```

- *Type:* number

---

##### `retentionDurationDaysInput`<sup>Optional</sup> <a name="retentionDurationDaysInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDaysInput"></a>

```typescript
public readonly retentionDurationDaysInput: number;
```

- *Type:* number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `weekBackupsInput`<sup>Optional</sup> <a name="weekBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackupsInput"></a>

```typescript
public readonly weekBackupsInput: number;
```

- *Type:* number

---

##### `yearBackupsInput`<sup>Optional</sup> <a name="yearBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackupsInput"></a>

```typescript
public readonly yearBackupsInput: number;
```

- *Type:* number

---

##### `dayBackups`<sup>Required</sup> <a name="dayBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackups"></a>

```typescript
public readonly dayBackups: number;
```

- *Type:* number

---

##### `maxBackups`<sup>Required</sup> <a name="maxBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackups"></a>

```typescript
public readonly maxBackups: number;
```

- *Type:* number

---

##### `monthBackups`<sup>Required</sup> <a name="monthBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackups"></a>

```typescript
public readonly monthBackups: number;
```

- *Type:* number

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `weekBackups`<sup>Required</sup> <a name="weekBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackups"></a>

```typescript
public readonly weekBackups: number;
```

- *Type:* number

---

##### `yearBackups`<sup>Required</sup> <a name="yearBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackups"></a>

```typescript
public readonly yearBackups: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CbrPolicyV3OperationDefinition;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---



