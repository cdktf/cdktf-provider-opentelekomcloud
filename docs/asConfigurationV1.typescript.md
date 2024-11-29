# `asConfigurationV1` Submodule <a name="`asConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.asConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsConfigurationV1 <a name="AsConfigurationV1" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1 opentelekomcloud_as_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1(scope: Construct, id: string, config: AsConfigurationV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config">AsConfigurationV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config">AsConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig">putInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceConfig` <a name="putInstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig"></a>

```typescript
public putInstanceConfig(value: AsConfigurationV1InstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AsConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

asConfigurationV1.AsConfigurationV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

asConfigurationV1.AsConfigurationV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

asConfigurationV1.AsConfigurationV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.generateConfigForImport"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

asConfigurationV1.AsConfigurationV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AsConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsConfigurationV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AsConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfig">instanceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference">AsConfigurationV1InstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfigInput">instanceConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationNameInput">scalingConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationName">scalingConfigurationName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceConfig`<sup>Required</sup> <a name="instanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfig"></a>

```typescript
public readonly instanceConfig: AsConfigurationV1InstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference">AsConfigurationV1InstanceConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceConfigInput`<sup>Optional</sup> <a name="instanceConfigInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfigInput"></a>

```typescript
public readonly instanceConfigInput: AsConfigurationV1InstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scalingConfigurationNameInput`<sup>Optional</sup> <a name="scalingConfigurationNameInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationNameInput"></a>

```typescript
public readonly scalingConfigurationNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scalingConfigurationName`<sup>Required</sup> <a name="scalingConfigurationName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationName"></a>

```typescript
public readonly scalingConfigurationName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsConfigurationV1Config <a name="AsConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const asConfigurationV1Config: asConfigurationV1.AsConfigurationV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.instanceConfig">instanceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | instance_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.scalingConfigurationName">scalingConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#id AsConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#region AsConfigurationV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceConfig`<sup>Required</sup> <a name="instanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.instanceConfig"></a>

```typescript
public readonly instanceConfig: AsConfigurationV1InstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#instance_config AsConfigurationV1#instance_config}

---

##### `scalingConfigurationName`<sup>Required</sup> <a name="scalingConfigurationName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.scalingConfigurationName"></a>

```typescript
public readonly scalingConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#id AsConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#region AsConfigurationV1#region}.

---

### AsConfigurationV1InstanceConfig <a name="AsConfigurationV1InstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const asConfigurationV1InstanceConfig: asConfigurationV1.AsConfigurationV1InstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#key_name AsConfigurationV1#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#flavor AsConfigurationV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#image AsConfigurationV1#image}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#instance_id AsConfigurationV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#metadata AsConfigurationV1#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.personality">personality</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>[]</code> | personality block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#security_groups AsConfigurationV1#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#user_data AsConfigurationV1#user_data}. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#key_name AsConfigurationV1#key_name}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.disk"></a>

```typescript
public readonly disk: IResolvable | AsConfigurationV1InstanceConfigDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#disk AsConfigurationV1#disk}

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#flavor AsConfigurationV1#flavor}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#image AsConfigurationV1#image}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#instance_id AsConfigurationV1#instance_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#metadata AsConfigurationV1#metadata}.

---

##### `personality`<sup>Optional</sup> <a name="personality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.personality"></a>

```typescript
public readonly personality: IResolvable | AsConfigurationV1InstanceConfigPersonality[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>[]

personality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#personality AsConfigurationV1#personality}

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.publicIp"></a>

```typescript
public readonly publicIp: AsConfigurationV1InstanceConfigPublicIp;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#public_ip AsConfigurationV1#public_ip}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#security_groups AsConfigurationV1#security_groups}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#user_data AsConfigurationV1#user_data}.

---

### AsConfigurationV1InstanceConfigDisk <a name="AsConfigurationV1InstanceConfigDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const asConfigurationV1InstanceConfigDisk: asConfigurationV1.AsConfigurationV1InstanceConfigDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.diskType">diskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#disk_type AsConfigurationV1#disk_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#size AsConfigurationV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#volume_type AsConfigurationV1#volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.kmsId">kmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#kms_id AsConfigurationV1#kms_id}. |

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#disk_type AsConfigurationV1#disk_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#size AsConfigurationV1#size}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#volume_type AsConfigurationV1#volume_type}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#kms_id AsConfigurationV1#kms_id}.

---

### AsConfigurationV1InstanceConfigPersonality <a name="AsConfigurationV1InstanceConfigPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const asConfigurationV1InstanceConfigPersonality: asConfigurationV1.AsConfigurationV1InstanceConfigPersonality = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#content AsConfigurationV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#path AsConfigurationV1#path}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#content AsConfigurationV1#content}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#path AsConfigurationV1#path}.

---

### AsConfigurationV1InstanceConfigPublicIp <a name="AsConfigurationV1InstanceConfigPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const asConfigurationV1InstanceConfigPublicIp: asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.property.eip">eip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | eip block. |

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.property.eip"></a>

```typescript
public readonly eip: AsConfigurationV1InstanceConfigPublicIpEip;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

eip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#eip AsConfigurationV1#eip}

---

### AsConfigurationV1InstanceConfigPublicIpEip <a name="AsConfigurationV1InstanceConfigPublicIpEip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const asConfigurationV1InstanceConfigPublicIpEip: asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | bandwidth block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.ipType">ipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#ip_type AsConfigurationV1#ip_type}. |

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.bandwidth"></a>

```typescript
public readonly bandwidth: AsConfigurationV1InstanceConfigPublicIpEipBandwidth;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

bandwidth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#bandwidth AsConfigurationV1#bandwidth}

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.ipType"></a>

```typescript
public readonly ipType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#ip_type AsConfigurationV1#ip_type}.

---

### AsConfigurationV1InstanceConfigPublicIpEipBandwidth <a name="AsConfigurationV1InstanceConfigPublicIpEipBandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

const asConfigurationV1InstanceConfigPublicIpEipBandwidth: asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.chargingMode">chargingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#charging_mode AsConfigurationV1#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.shareType">shareType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#share_type AsConfigurationV1#share_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#size AsConfigurationV1#size}. |

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.chargingMode"></a>

```typescript
public readonly chargingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#charging_mode AsConfigurationV1#charging_mode}.

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#share_type AsConfigurationV1#share_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/as_configuration_v1#size AsConfigurationV1#size}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsConfigurationV1InstanceConfigDiskList <a name="AsConfigurationV1InstanceConfigDiskList" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get"></a>

```typescript
public get(index: number): AsConfigurationV1InstanceConfigDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsConfigurationV1InstanceConfigDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>[]

---


### AsConfigurationV1InstanceConfigDiskOutputReference <a name="AsConfigurationV1InstanceConfigDiskOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resetKmsId"></a>

```typescript
public resetKmsId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsIdInput"></a>

```typescript
public readonly kmsIdInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsConfigurationV1InstanceConfigDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>

---


### AsConfigurationV1InstanceConfigOutputReference <a name="AsConfigurationV1InstanceConfigOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality">putPersonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp">putPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetFlavor">resetFlavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPersonality">resetPersonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPublicIp">resetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisk` <a name="putDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk"></a>

```typescript
public putDisk(value: IResolvable | AsConfigurationV1InstanceConfigDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>[]

---

##### `putPersonality` <a name="putPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality"></a>

```typescript
public putPersonality(value: IResolvable | AsConfigurationV1InstanceConfigPersonality[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>[]

---

##### `putPublicIp` <a name="putPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp"></a>

```typescript
public putPublicIp(value: AsConfigurationV1InstanceConfigPublicIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetFlavor` <a name="resetFlavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetFlavor"></a>

```typescript
public resetFlavor(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPersonality` <a name="resetPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPersonality"></a>

```typescript
public resetPersonality(): void
```

##### `resetPublicIp` <a name="resetPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPublicIp"></a>

```typescript
public resetPublicIp(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetUserData"></a>

```typescript
public resetUserData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList">AsConfigurationV1InstanceConfigDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personality">personality</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList">AsConfigurationV1InstanceConfigPersonalityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference">AsConfigurationV1InstanceConfigPublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personalityInput">personalityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIpInput">publicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.disk"></a>

```typescript
public readonly disk: AsConfigurationV1InstanceConfigDiskList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList">AsConfigurationV1InstanceConfigDiskList</a>

---

##### `personality`<sup>Required</sup> <a name="personality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personality"></a>

```typescript
public readonly personality: AsConfigurationV1InstanceConfigPersonalityList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList">AsConfigurationV1InstanceConfigPersonalityList</a>

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIp"></a>

```typescript
public readonly publicIp: AsConfigurationV1InstanceConfigPublicIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference">AsConfigurationV1InstanceConfigPublicIpOutputReference</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | AsConfigurationV1InstanceConfigDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>[]

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `personalityInput`<sup>Optional</sup> <a name="personalityInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personalityInput"></a>

```typescript
public readonly personalityInput: IResolvable | AsConfigurationV1InstanceConfigPersonality[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>[]

---

##### `publicIpInput`<sup>Optional</sup> <a name="publicIpInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIpInput"></a>

```typescript
public readonly publicIpInput: AsConfigurationV1InstanceConfigPublicIp;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AsConfigurationV1InstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---


### AsConfigurationV1InstanceConfigPersonalityList <a name="AsConfigurationV1InstanceConfigPersonalityList" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get"></a>

```typescript
public get(index: number): AsConfigurationV1InstanceConfigPersonalityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsConfigurationV1InstanceConfigPersonality[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>[]

---


### AsConfigurationV1InstanceConfigPersonalityOutputReference <a name="AsConfigurationV1InstanceConfigPersonalityOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsConfigurationV1InstanceConfigPersonality;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>

---


### AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingModeInput">chargingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingMode">chargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chargingModeInput`<sup>Optional</sup> <a name="chargingModeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingModeInput"></a>

```typescript
public readonly chargingModeInput: string;
```

- *Type:* string

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareTypeInput"></a>

```typescript
public readonly shareTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingMode"></a>

```typescript
public readonly chargingMode: string;
```

- *Type:* string

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AsConfigurationV1InstanceConfigPublicIpEipBandwidth;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---


### AsConfigurationV1InstanceConfigPublicIpEipOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpEipOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth">putBandwidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidth` <a name="putBandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth"></a>

```typescript
public putBandwidth(value: AsConfigurationV1InstanceConfigPublicIpEipBandwidth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference">AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidthInput">bandwidthInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipTypeInput">ipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipType">ipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidth"></a>

```typescript
public readonly bandwidth: AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference">AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: AsConfigurationV1InstanceConfigPublicIpEipBandwidth;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---

##### `ipTypeInput`<sup>Optional</sup> <a name="ipTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipTypeInput"></a>

```typescript
public readonly ipTypeInput: string;
```

- *Type:* string

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipType"></a>

```typescript
public readonly ipType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AsConfigurationV1InstanceConfigPublicIpEip;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---


### AsConfigurationV1InstanceConfigPublicIpOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer"></a>

```typescript
import { asConfigurationV1 } from '@cdktf/provider-opentelekomcloud'

new asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip">putEip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEip` <a name="putEip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip"></a>

```typescript
public putEip(value: AsConfigurationV1InstanceConfigPublicIpEip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eip">eip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference">AsConfigurationV1InstanceConfigPublicIpEipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eipInput">eipInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eip"></a>

```typescript
public readonly eip: AsConfigurationV1InstanceConfigPublicIpEipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference">AsConfigurationV1InstanceConfigPublicIpEipOutputReference</a>

---

##### `eipInput`<sup>Optional</sup> <a name="eipInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eipInput"></a>

```typescript
public readonly eipInput: AsConfigurationV1InstanceConfigPublicIpEip;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AsConfigurationV1InstanceConfigPublicIp;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---



