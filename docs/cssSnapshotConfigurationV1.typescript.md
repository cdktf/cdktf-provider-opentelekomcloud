# `cssSnapshotConfigurationV1` Submodule <a name="`cssSnapshotConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssSnapshotConfigurationV1 <a name="CssSnapshotConfigurationV1" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1 opentelekomcloud_css_snapshot_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new cssSnapshotConfigurationV1.CssSnapshotConfigurationV1(scope: Construct, id: string, config: CssSnapshotConfigurationV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config">CssSnapshotConfigurationV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config">CssSnapshotConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy">putCreationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetCreationPolicy">resetCreationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration"></a>

```typescript
public putConfiguration(value: CssSnapshotConfigurationV1Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---

##### `putCreationPolicy` <a name="putCreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy"></a>

```typescript
public putCreationPolicy(value: CssSnapshotConfigurationV1CreationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CssSnapshotConfigurationV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetCreationPolicy` <a name="resetCreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetCreationPolicy"></a>

```typescript
public resetCreationPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CssSnapshotConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CssSnapshotConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CssSnapshotConfigurationV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CssSnapshotConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CssSnapshotConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.basePath">basePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference">CssSnapshotConfigurationV1ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicy">creationPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference">CssSnapshotConfigurationV1CreationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference">CssSnapshotConfigurationV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automaticInput">automaticInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicyInput">creationPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configuration"></a>

```typescript
public readonly configuration: CssSnapshotConfigurationV1ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference">CssSnapshotConfigurationV1ConfigurationOutputReference</a>

---

##### `creationPolicy`<sup>Required</sup> <a name="creationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicy"></a>

```typescript
public readonly creationPolicy: CssSnapshotConfigurationV1CreationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference">CssSnapshotConfigurationV1CreationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeouts"></a>

```typescript
public readonly timeouts: CssSnapshotConfigurationV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference">CssSnapshotConfigurationV1TimeoutsOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automaticInput"></a>

```typescript
public readonly automaticInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configurationInput"></a>

```typescript
public readonly configurationInput: CssSnapshotConfigurationV1Configuration;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---

##### `creationPolicyInput`<sup>Optional</sup> <a name="creationPolicyInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicyInput"></a>

```typescript
public readonly creationPolicyInput: CssSnapshotConfigurationV1CreationPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CssSnapshotConfigurationV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CssSnapshotConfigurationV1Config <a name="CssSnapshotConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const cssSnapshotConfigurationV1Config: cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.creationPolicy">creationPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | creation_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.configuration"></a>

```typescript
public readonly configuration: CssSnapshotConfigurationV1Configuration;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#configuration CssSnapshotConfigurationV1#configuration}

---

##### `creationPolicy`<sup>Optional</sup> <a name="creationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.creationPolicy"></a>

```typescript
public readonly creationPolicy: CssSnapshotConfigurationV1CreationPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

creation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#creation_policy CssSnapshotConfigurationV1#creation_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CssSnapshotConfigurationV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#timeouts CssSnapshotConfigurationV1#timeouts}

---

### CssSnapshotConfigurationV1Configuration <a name="CssSnapshotConfigurationV1Configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const cssSnapshotConfigurationV1Configuration: cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.agency">agency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#agency CssSnapshotConfigurationV1#agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#bucket CssSnapshotConfigurationV1#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.kmsId">kmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#kms_id CssSnapshotConfigurationV1#kms_id}. |

---

##### `agency`<sup>Required</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.agency"></a>

```typescript
public readonly agency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#agency CssSnapshotConfigurationV1#agency}.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#bucket CssSnapshotConfigurationV1#bucket}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#kms_id CssSnapshotConfigurationV1#kms_id}.

---

### CssSnapshotConfigurationV1CreationPolicy <a name="CssSnapshotConfigurationV1CreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const cssSnapshotConfigurationV1CreationPolicy: cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#enable CssSnapshotConfigurationV1#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.keepday">keepday</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#keepday CssSnapshotConfigurationV1#keepday}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#period CssSnapshotConfigurationV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#prefix CssSnapshotConfigurationV1#prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.deleteAuto">deleteAuto</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#delete_auto CssSnapshotConfigurationV1#delete_auto}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#enable CssSnapshotConfigurationV1#enable}.

---

##### `keepday`<sup>Required</sup> <a name="keepday" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.keepday"></a>

```typescript
public readonly keepday: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#keepday CssSnapshotConfigurationV1#keepday}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#period CssSnapshotConfigurationV1#period}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#prefix CssSnapshotConfigurationV1#prefix}.

---

##### `deleteAuto`<sup>Optional</sup> <a name="deleteAuto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.deleteAuto"></a>

```typescript
public readonly deleteAuto: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#delete_auto CssSnapshotConfigurationV1#delete_auto}.

---

### CssSnapshotConfigurationV1Timeouts <a name="CssSnapshotConfigurationV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const cssSnapshotConfigurationV1Timeouts: cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#create CssSnapshotConfigurationV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#update CssSnapshotConfigurationV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#create CssSnapshotConfigurationV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/css_snapshot_configuration_v1#update CssSnapshotConfigurationV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssSnapshotConfigurationV1ConfigurationOutputReference <a name="CssSnapshotConfigurationV1ConfigurationOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resetKmsId"></a>

```typescript
public resetKmsId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agencyInput">agencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agency">agency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agencyInput`<sup>Optional</sup> <a name="agencyInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agencyInput"></a>

```typescript
public readonly agencyInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsIdInput"></a>

```typescript
public readonly kmsIdInput: string;
```

- *Type:* string

---

##### `agency`<sup>Required</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agency"></a>

```typescript
public readonly agency: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CssSnapshotConfigurationV1Configuration;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---


### CssSnapshotConfigurationV1CreationPolicyOutputReference <a name="CssSnapshotConfigurationV1CreationPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resetDeleteAuto">resetDeleteAuto</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteAuto` <a name="resetDeleteAuto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resetDeleteAuto"></a>

```typescript
public resetDeleteAuto(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAutoInput">deleteAutoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepdayInput">keepdayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAuto">deleteAuto</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepday">keepday</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteAutoInput`<sup>Optional</sup> <a name="deleteAutoInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAutoInput"></a>

```typescript
public readonly deleteAutoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepdayInput`<sup>Optional</sup> <a name="keepdayInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepdayInput"></a>

```typescript
public readonly keepdayInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `deleteAuto`<sup>Required</sup> <a name="deleteAuto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAuto"></a>

```typescript
public readonly deleteAuto: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepday`<sup>Required</sup> <a name="keepday" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepday"></a>

```typescript
public readonly keepday: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CssSnapshotConfigurationV1CreationPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---


### CssSnapshotConfigurationV1TimeoutsOutputReference <a name="CssSnapshotConfigurationV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { cssSnapshotConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CssSnapshotConfigurationV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

---



