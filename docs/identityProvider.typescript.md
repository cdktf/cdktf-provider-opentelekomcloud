# `opentelekomcloud_identity_provider`

Refer to the Terraform Registory for docs: [`opentelekomcloud_identity_provider`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider).

# `identityProvider` Submodule <a name="`identityProvider` Submodule" id="@cdktf/provider-opentelekomcloud.identityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityProvider <a name="IdentityProvider" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider opentelekomcloud_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProvider(scope: Construct, id: string, config: IdentityProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig">IdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig">IdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetMappingRules">resetMappingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.putAccessConfig"></a>

```typescript
public putAccessConfig(value: IdentityProviderAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig">IdentityProviderAccessConfig</a>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetAccessConfig"></a>

```typescript
public resetAccessConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMappingRules` <a name="resetMappingRules" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetMappingRules"></a>

```typescript
public resetMappingRules(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isConstruct"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

identityProvider.IdentityProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isTerraformElement"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

identityProvider.IdentityProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isTerraformResource"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

identityProvider.IdentityProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.generateConfigForImport"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

identityProvider.IdentityProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference">IdentityProviderAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.conversionRules">conversionRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList">IdentityProviderConversionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.loginLink">loginLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig">IdentityProviderAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.mappingRulesInput">mappingRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.statusInput">statusInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.mappingRules">mappingRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.status">status</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.accessConfig"></a>

```typescript
public readonly accessConfig: IdentityProviderAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference">IdentityProviderAccessConfigOutputReference</a>

---

##### `conversionRules`<sup>Required</sup> <a name="conversionRules" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.conversionRules"></a>

```typescript
public readonly conversionRules: IdentityProviderConversionRulesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList">IdentityProviderConversionRulesList</a>

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.links"></a>

```typescript
public readonly links: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `loginLink`<sup>Required</sup> <a name="loginLink" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.loginLink"></a>

```typescript
public readonly loginLink: string;
```

- *Type:* string

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: IdentityProviderAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig">IdentityProviderAccessConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mappingRulesInput`<sup>Optional</sup> <a name="mappingRulesInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.mappingRulesInput"></a>

```typescript
public readonly mappingRulesInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.statusInput"></a>

```typescript
public readonly statusInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mappingRules`<sup>Required</sup> <a name="mappingRules" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.mappingRules"></a>

```typescript
public readonly mappingRules: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.status"></a>

```typescript
public readonly status: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityProviderAccessConfig <a name="IdentityProviderAccessConfig" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

const identityProviderAccessConfig: identityProvider.IdentityProviderAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.accessType">accessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#access_type IdentityProvider#access_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#client_id IdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.providerUrl">providerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#provider_url IdentityProvider#provider_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.signingKey">signingKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#signing_key IdentityProvider#signing_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#authorization_endpoint IdentityProvider#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.responseMode">responseMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#response_mode IdentityProvider#response_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.responseType">responseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#response_type IdentityProvider#response_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#scopes IdentityProvider#scopes}. |

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#access_type IdentityProvider#access_type}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#client_id IdentityProvider#client_id}.

---

##### `providerUrl`<sup>Required</sup> <a name="providerUrl" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.providerUrl"></a>

```typescript
public readonly providerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#provider_url IdentityProvider#provider_url}.

---

##### `signingKey`<sup>Required</sup> <a name="signingKey" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.signingKey"></a>

```typescript
public readonly signingKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#signing_key IdentityProvider#signing_key}.

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#authorization_endpoint IdentityProvider#authorization_endpoint}.

---

##### `responseMode`<sup>Optional</sup> <a name="responseMode" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.responseMode"></a>

```typescript
public readonly responseMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#response_mode IdentityProvider#response_mode}.

---

##### `responseType`<sup>Optional</sup> <a name="responseType" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#response_type IdentityProvider#response_type}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#scopes IdentityProvider#scopes}.

---

### IdentityProviderConfig <a name="IdentityProviderConfig" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

const identityProviderConfig: identityProvider.IdentityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#name IdentityProvider#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#protocol IdentityProvider#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig">IdentityProviderAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#description IdentityProvider#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#id IdentityProvider#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.mappingRules">mappingRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#mapping_rules IdentityProvider#mapping_rules}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#metadata IdentityProvider#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.status">status</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#status IdentityProvider#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#name IdentityProvider#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#protocol IdentityProvider#protocol}.

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.accessConfig"></a>

```typescript
public readonly accessConfig: IdentityProviderAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig">IdentityProviderAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#access_config IdentityProvider#access_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#description IdentityProvider#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#id IdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingRules`<sup>Optional</sup> <a name="mappingRules" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.mappingRules"></a>

```typescript
public readonly mappingRules: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#mapping_rules IdentityProvider#mapping_rules}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#metadata IdentityProvider#metadata}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConfig.property.status"></a>

```typescript
public readonly status: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_provider#status IdentityProvider#status}.

---

### IdentityProviderConversionRules <a name="IdentityProviderConversionRules" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRules.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

const identityProviderConversionRules: identityProvider.IdentityProviderConversionRules = { ... }
```


### IdentityProviderConversionRulesLocal <a name="IdentityProviderConversionRulesLocal" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocal.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

const identityProviderConversionRulesLocal: identityProvider.IdentityProviderConversionRulesLocal = { ... }
```


### IdentityProviderConversionRulesRemote <a name="IdentityProviderConversionRulesRemote" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemote.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

const identityProviderConversionRulesRemote: identityProvider.IdentityProviderConversionRulesRemote = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### IdentityProviderAccessConfigOutputReference <a name="IdentityProviderAccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProviderAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetResponseMode">resetResponseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetResponseType">resetResponseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetAuthorizationEndpoint"></a>

```typescript
public resetAuthorizationEndpoint(): void
```

##### `resetResponseMode` <a name="resetResponseMode" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetResponseMode"></a>

```typescript
public resetResponseMode(): void
```

##### `resetResponseType` <a name="resetResponseType" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetResponseType"></a>

```typescript
public resetResponseType(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.providerUrlInput">providerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseModeInput">responseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseTypeInput">responseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.signingKeyInput">signingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.providerUrl">providerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseMode">responseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseType">responseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.signingKey">signingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig">IdentityProviderAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `providerUrlInput`<sup>Optional</sup> <a name="providerUrlInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.providerUrlInput"></a>

```typescript
public readonly providerUrlInput: string;
```

- *Type:* string

---

##### `responseModeInput`<sup>Optional</sup> <a name="responseModeInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseModeInput"></a>

```typescript
public readonly responseModeInput: string;
```

- *Type:* string

---

##### `responseTypeInput`<sup>Optional</sup> <a name="responseTypeInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseTypeInput"></a>

```typescript
public readonly responseTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `signingKeyInput`<sup>Optional</sup> <a name="signingKeyInput" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.signingKeyInput"></a>

```typescript
public readonly signingKeyInput: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `providerUrl`<sup>Required</sup> <a name="providerUrl" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.providerUrl"></a>

```typescript
public readonly providerUrl: string;
```

- *Type:* string

---

##### `responseMode`<sup>Required</sup> <a name="responseMode" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseMode"></a>

```typescript
public readonly responseMode: string;
```

- *Type:* string

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `signingKey`<sup>Required</sup> <a name="signingKey" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.signingKey"></a>

```typescript
public readonly signingKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityProviderAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderAccessConfig">IdentityProviderAccessConfig</a>

---


### IdentityProviderConversionRulesList <a name="IdentityProviderConversionRulesList" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProviderConversionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.get"></a>

```typescript
public get(index: number): IdentityProviderConversionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityProviderConversionRulesLocalList <a name="IdentityProviderConversionRulesLocalList" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProviderConversionRulesLocalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.get"></a>

```typescript
public get(index: number): IdentityProviderConversionRulesLocalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityProviderConversionRulesLocalOutputReference <a name="IdentityProviderConversionRulesLocalOutputReference" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProviderConversionRulesLocalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.groups">groups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocal">IdentityProviderConversionRulesLocal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.groups"></a>

```typescript
public readonly groups: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityProviderConversionRulesLocal;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocal">IdentityProviderConversionRulesLocal</a>

---


### IdentityProviderConversionRulesOutputReference <a name="IdentityProviderConversionRulesOutputReference" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProviderConversionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList">IdentityProviderConversionRulesLocalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList">IdentityProviderConversionRulesRemoteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRules">IdentityProviderConversionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.local"></a>

```typescript
public readonly local: IdentityProviderConversionRulesLocalList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesLocalList">IdentityProviderConversionRulesLocalList</a>

---

##### `remote`<sup>Required</sup> <a name="remote" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.remote"></a>

```typescript
public readonly remote: IdentityProviderConversionRulesRemoteList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList">IdentityProviderConversionRulesRemoteList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityProviderConversionRules;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRules">IdentityProviderConversionRules</a>

---


### IdentityProviderConversionRulesRemoteList <a name="IdentityProviderConversionRulesRemoteList" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProviderConversionRulesRemoteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.get"></a>

```typescript
public get(index: number): IdentityProviderConversionRulesRemoteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityProviderConversionRulesRemoteOutputReference <a name="IdentityProviderConversionRulesRemoteOutputReference" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer"></a>

```typescript
import { identityProvider } from '@cdktf/provider-opentelekomcloud'

new identityProvider.IdentityProviderConversionRulesRemoteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemote">IdentityProviderConversionRulesRemote</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemoteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityProviderConversionRulesRemote;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProvider.IdentityProviderConversionRulesRemote">IdentityProviderConversionRulesRemote</a>

---



