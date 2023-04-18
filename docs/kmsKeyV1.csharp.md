# `opentelekomcloud_kms_key_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_kms_key_v1`](https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1).

# `kmsKeyV1` Submodule <a name="`kmsKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.kmsKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyV1 <a name="KmsKeyV1" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1 opentelekomcloud_kms_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new KmsKeyV1(Construct Scope, string Id, KmsKeyV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config">KmsKeyV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config">KmsKeyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion">ResetAllowCancelDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription">ResetKeyDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays">ResetPendingDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm">ResetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled">ResetRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval">ResetRotationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowCancelDeletion` <a name="ResetAllowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion"></a>

```csharp
private void ResetAllowCancelDeletion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetKeyDescription` <a name="ResetKeyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription"></a>

```csharp
private void ResetKeyDescription()
```

##### `ResetPendingDays` <a name="ResetPendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays"></a>

```csharp
private void ResetPendingDays()
```

##### `ResetRealm` <a name="ResetRealm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm"></a>

```csharp
private void ResetRealm()
```

##### `ResetRotationEnabled` <a name="ResetRotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled"></a>

```csharp
private void ResetRotationEnabled()
```

##### `ResetRotationInterval` <a name="ResetRotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval"></a>

```csharp
private void ResetRotationInterval()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

KmsKeyV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

KmsKeyV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

KmsKeyV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag">DefaultKeyFlag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber">RotationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate">ScheduledDeletionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput">AllowCancelDeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput">KeyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput">KeyDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput">PendingDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput">RealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput">RotationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput">RotationIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion">AllowCancelDeletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias">KeyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription">KeyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays">PendingDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm">Realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled">RotationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval">RotationInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `DefaultKeyFlag`<sup>Required</sup> <a name="DefaultKeyFlag" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag"></a>

```csharp
public string DefaultKeyFlag { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `RotationNumber`<sup>Required</sup> <a name="RotationNumber" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber"></a>

```csharp
public double RotationNumber { get; }
```

- *Type:* double

---

##### `ScheduledDeletionDate`<sup>Required</sup> <a name="ScheduledDeletionDate" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate"></a>

```csharp
public string ScheduledDeletionDate { get; }
```

- *Type:* string

---

##### `AllowCancelDeletionInput`<sup>Optional</sup> <a name="AllowCancelDeletionInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput"></a>

```csharp
public object AllowCancelDeletionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `KeyAliasInput`<sup>Optional</sup> <a name="KeyAliasInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput"></a>

```csharp
public string KeyAliasInput { get; }
```

- *Type:* string

---

##### `KeyDescriptionInput`<sup>Optional</sup> <a name="KeyDescriptionInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput"></a>

```csharp
public string KeyDescriptionInput { get; }
```

- *Type:* string

---

##### `PendingDaysInput`<sup>Optional</sup> <a name="PendingDaysInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput"></a>

```csharp
public string PendingDaysInput { get; }
```

- *Type:* string

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput"></a>

```csharp
public string RealmInput { get; }
```

- *Type:* string

---

##### `RotationEnabledInput`<sup>Optional</sup> <a name="RotationEnabledInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput"></a>

```csharp
public object RotationEnabledInput { get; }
```

- *Type:* object

---

##### `RotationIntervalInput`<sup>Optional</sup> <a name="RotationIntervalInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput"></a>

```csharp
public double RotationIntervalInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowCancelDeletion`<sup>Required</sup> <a name="AllowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion"></a>

```csharp
public object AllowCancelDeletion { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias"></a>

```csharp
public string KeyAlias { get; }
```

- *Type:* string

---

##### `KeyDescription`<sup>Required</sup> <a name="KeyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription"></a>

```csharp
public string KeyDescription { get; }
```

- *Type:* string

---

##### `PendingDays`<sup>Required</sup> <a name="PendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays"></a>

```csharp
public string PendingDays { get; }
```

- *Type:* string

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm"></a>

```csharp
public string Realm { get; }
```

- *Type:* string

---

##### `RotationEnabled`<sup>Required</sup> <a name="RotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled"></a>

```csharp
public object RotationEnabled { get; }
```

- *Type:* object

---

##### `RotationInterval`<sup>Required</sup> <a name="RotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval"></a>

```csharp
public double RotationInterval { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyV1Config <a name="KmsKeyV1Config" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new KmsKeyV1Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyAlias,
    object AllowCancelDeletion = null,
    string Id = null,
    object IsEnabled = null,
    string KeyDescription = null,
    string PendingDays = null,
    string Realm = null,
    object RotationEnabled = null,
    double RotationInterval = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias">KeyAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#key_alias KmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion">AllowCancelDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#id KmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#is_enabled KmsKeyV1#is_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription">KeyDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#key_description KmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays">PendingDays</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#pending_days KmsKeyV1#pending_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm">Realm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#realm KmsKeyV1#realm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled">RotationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval">RotationInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#tags KmsKeyV1#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias"></a>

```csharp
public string KeyAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#key_alias KmsKeyV1#key_alias}.

---

##### `AllowCancelDeletion`<sup>Optional</sup> <a name="AllowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion"></a>

```csharp
public object AllowCancelDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#id KmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#is_enabled KmsKeyV1#is_enabled}.

---

##### `KeyDescription`<sup>Optional</sup> <a name="KeyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription"></a>

```csharp
public string KeyDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#key_description KmsKeyV1#key_description}.

---

##### `PendingDays`<sup>Optional</sup> <a name="PendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays"></a>

```csharp
public string PendingDays { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#pending_days KmsKeyV1#pending_days}.

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm"></a>

```csharp
public string Realm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#realm KmsKeyV1#realm}.

---

##### `RotationEnabled`<sup>Optional</sup> <a name="RotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled"></a>

```csharp
public object RotationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}.

---

##### `RotationInterval`<sup>Optional</sup> <a name="RotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval"></a>

```csharp
public double RotationInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#tags KmsKeyV1#tags}.

---



