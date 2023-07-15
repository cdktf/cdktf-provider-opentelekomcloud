# `opentelekomcloud_as_configuration_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_as_configuration_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1).

# `asConfigurationV1` Submodule <a name="`asConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.asConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsConfigurationV1 <a name="AsConfigurationV1" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1 opentelekomcloud_as_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1(Construct Scope, string Id, AsConfigurationV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config">AsConfigurationV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config">AsConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig">PutInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInstanceConfig` <a name="PutInstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig"></a>

```csharp
private void PutInstanceConfig(AsConfigurationV1InstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsConfigurationV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsConfigurationV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsConfigurationV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfig">InstanceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference">AsConfigurationV1InstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfigInput">InstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationNameInput">ScalingConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationName">ScalingConfigurationName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InstanceConfig`<sup>Required</sup> <a name="InstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfig"></a>

```csharp
public AsConfigurationV1InstanceConfigOutputReference InstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference">AsConfigurationV1InstanceConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceConfigInput`<sup>Optional</sup> <a name="InstanceConfigInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfigInput"></a>

```csharp
public AsConfigurationV1InstanceConfig InstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScalingConfigurationNameInput`<sup>Optional</sup> <a name="ScalingConfigurationNameInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationNameInput"></a>

```csharp
public string ScalingConfigurationNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScalingConfigurationName`<sup>Required</sup> <a name="ScalingConfigurationName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationName"></a>

```csharp
public string ScalingConfigurationName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsConfigurationV1Config <a name="AsConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    AsConfigurationV1InstanceConfig InstanceConfig,
    string ScalingConfigurationName,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.instanceConfig">InstanceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | instance_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.scalingConfigurationName">ScalingConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#id AsConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#region AsConfigurationV1#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceConfig`<sup>Required</sup> <a name="InstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.instanceConfig"></a>

```csharp
public AsConfigurationV1InstanceConfig InstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#instance_config AsConfigurationV1#instance_config}

---

##### `ScalingConfigurationName`<sup>Required</sup> <a name="ScalingConfigurationName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.scalingConfigurationName"></a>

```csharp
public string ScalingConfigurationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#id AsConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#region AsConfigurationV1#region}.

---

### AsConfigurationV1InstanceConfig <a name="AsConfigurationV1InstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfig {
    string KeyName,
    object Disk = null,
    string Flavor = null,
    string Image = null,
    string InstanceId = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    object Personality = null,
    AsConfigurationV1InstanceConfigPublicIp PublicIp = null,
    string[] SecurityGroups = null,
    string UserData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#key_name AsConfigurationV1#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.disk">Disk</a></code> | <code>object</code> | disk block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.flavor">Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#flavor AsConfigurationV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#image AsConfigurationV1#image}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#instance_id AsConfigurationV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#metadata AsConfigurationV1#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.personality">Personality</a></code> | <code>object</code> | personality block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.publicIp">PublicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#security_groups AsConfigurationV1#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#user_data AsConfigurationV1#user_data}. |

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#key_name AsConfigurationV1#key_name}.

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.disk"></a>

```csharp
public object Disk { get; set; }
```

- *Type:* object

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#disk AsConfigurationV1#disk}

---

##### `Flavor`<sup>Optional</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.flavor"></a>

```csharp
public string Flavor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#flavor AsConfigurationV1#flavor}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#image AsConfigurationV1#image}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#instance_id AsConfigurationV1#instance_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#metadata AsConfigurationV1#metadata}.

---

##### `Personality`<sup>Optional</sup> <a name="Personality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.personality"></a>

```csharp
public object Personality { get; set; }
```

- *Type:* object

personality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#personality AsConfigurationV1#personality}

---

##### `PublicIp`<sup>Optional</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.publicIp"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIp PublicIp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#public_ip AsConfigurationV1#public_ip}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#security_groups AsConfigurationV1#security_groups}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#user_data AsConfigurationV1#user_data}.

---

### AsConfigurationV1InstanceConfigDisk <a name="AsConfigurationV1InstanceConfigDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigDisk {
    string DiskType,
    double Size,
    string VolumeType,
    string KmsId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.diskType">DiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#disk_type AsConfigurationV1#disk_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#size AsConfigurationV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#volume_type AsConfigurationV1#volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.kmsId">KmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#kms_id AsConfigurationV1#kms_id}. |

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#disk_type AsConfigurationV1#disk_type}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#size AsConfigurationV1#size}.

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#volume_type AsConfigurationV1#volume_type}.

---

##### `KmsId`<sup>Optional</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.kmsId"></a>

```csharp
public string KmsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#kms_id AsConfigurationV1#kms_id}.

---

### AsConfigurationV1InstanceConfigPersonality <a name="AsConfigurationV1InstanceConfigPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPersonality {
    string Content,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#content AsConfigurationV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#path AsConfigurationV1#path}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#content AsConfigurationV1#content}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#path AsConfigurationV1#path}.

---

### AsConfigurationV1InstanceConfigPublicIp <a name="AsConfigurationV1InstanceConfigPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPublicIp {
    AsConfigurationV1InstanceConfigPublicIpEip Eip
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.property.eip">Eip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | eip block. |

---

##### `Eip`<sup>Required</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.property.eip"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEip Eip { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

eip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#eip AsConfigurationV1#eip}

---

### AsConfigurationV1InstanceConfigPublicIpEip <a name="AsConfigurationV1InstanceConfigPublicIpEip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPublicIpEip {
    AsConfigurationV1InstanceConfigPublicIpEipBandwidth Bandwidth,
    string IpType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | bandwidth block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.ipType">IpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#ip_type AsConfigurationV1#ip_type}. |

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.bandwidth"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEipBandwidth Bandwidth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

bandwidth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#bandwidth AsConfigurationV1#bandwidth}

---

##### `IpType`<sup>Required</sup> <a name="IpType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.ipType"></a>

```csharp
public string IpType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#ip_type AsConfigurationV1#ip_type}.

---

### AsConfigurationV1InstanceConfigPublicIpEipBandwidth <a name="AsConfigurationV1InstanceConfigPublicIpEipBandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPublicIpEipBandwidth {
    string ChargingMode,
    string ShareType,
    double Size
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.chargingMode">ChargingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#charging_mode AsConfigurationV1#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.shareType">ShareType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#share_type AsConfigurationV1#share_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#size AsConfigurationV1#size}. |

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.chargingMode"></a>

```csharp
public string ChargingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#charging_mode AsConfigurationV1#charging_mode}.

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.shareType"></a>

```csharp
public string ShareType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#share_type AsConfigurationV1#share_type}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.3/docs/resources/as_configuration_v1#size AsConfigurationV1#size}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsConfigurationV1InstanceConfigDiskList <a name="AsConfigurationV1InstanceConfigDiskList" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get"></a>

```csharp
private AsConfigurationV1InstanceConfigDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsConfigurationV1InstanceConfigDiskOutputReference <a name="AsConfigurationV1InstanceConfigDiskOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resetKmsId">ResetKmsId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsId` <a name="ResetKmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resetKmsId"></a>

```csharp
private void ResetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsIdInput">KmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsId">KmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `KmsIdInput`<sup>Optional</sup> <a name="KmsIdInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsIdInput"></a>

```csharp
public string KmsIdInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `KmsId`<sup>Required</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsId"></a>

```csharp
public string KmsId { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsConfigurationV1InstanceConfigOutputReference <a name="AsConfigurationV1InstanceConfigOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality">PutPersonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp">PutPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetFlavor">ResetFlavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPersonality">ResetPersonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPublicIp">ResetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk"></a>

```csharp
private void PutDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk.parameter.value"></a>

- *Type:* object

---

##### `PutPersonality` <a name="PutPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality"></a>

```csharp
private void PutPersonality(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality.parameter.value"></a>

- *Type:* object

---

##### `PutPublicIp` <a name="PutPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp"></a>

```csharp
private void PutPublicIp(AsConfigurationV1InstanceConfigPublicIp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetDisk"></a>

```csharp
private void ResetDisk()
```

##### `ResetFlavor` <a name="ResetFlavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetFlavor"></a>

```csharp
private void ResetFlavor()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetPersonality` <a name="ResetPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPersonality"></a>

```csharp
private void ResetPersonality()
```

##### `ResetPublicIp` <a name="ResetPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPublicIp"></a>

```csharp
private void ResetPublicIp()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetUserData"></a>

```csharp
private void ResetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList">AsConfigurationV1InstanceConfigDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personality">Personality</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList">AsConfigurationV1InstanceConfigPersonalityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIp">PublicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference">AsConfigurationV1InstanceConfigPublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.diskInput">DiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavorInput">FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personalityInput">PersonalityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIpInput">PublicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavor">Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.disk"></a>

```csharp
public AsConfigurationV1InstanceConfigDiskList Disk { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList">AsConfigurationV1InstanceConfigDiskList</a>

---

##### `Personality`<sup>Required</sup> <a name="Personality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personality"></a>

```csharp
public AsConfigurationV1InstanceConfigPersonalityList Personality { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList">AsConfigurationV1InstanceConfigPersonalityList</a>

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIp"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpOutputReference PublicIp { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference">AsConfigurationV1InstanceConfigPublicIpOutputReference</a>

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.diskInput"></a>

```csharp
public object DiskInput { get; }
```

- *Type:* object

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavorInput"></a>

```csharp
public string FlavorInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PersonalityInput`<sup>Optional</sup> <a name="PersonalityInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personalityInput"></a>

```csharp
public object PersonalityInput { get; }
```

- *Type:* object

---

##### `PublicIpInput`<sup>Optional</sup> <a name="PublicIpInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIpInput"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIp PublicIpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavor"></a>

```csharp
public string Flavor { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.internalValue"></a>

```csharp
public AsConfigurationV1InstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---


### AsConfigurationV1InstanceConfigPersonalityList <a name="AsConfigurationV1InstanceConfigPersonalityList" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPersonalityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get"></a>

```csharp
private AsConfigurationV1InstanceConfigPersonalityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsConfigurationV1InstanceConfigPersonalityOutputReference <a name="AsConfigurationV1InstanceConfigPersonalityOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPersonalityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingModeInput">ChargingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingMode">ChargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareType">ShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChargingModeInput`<sup>Optional</sup> <a name="ChargingModeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingModeInput"></a>

```csharp
public string ChargingModeInput { get; }
```

- *Type:* string

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareTypeInput"></a>

```csharp
public string ShareTypeInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingMode"></a>

```csharp
public string ChargingMode { get; }
```

- *Type:* string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareType"></a>

```csharp
public string ShareType { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.internalValue"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEipBandwidth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---


### AsConfigurationV1InstanceConfigPublicIpEipOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpEipOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPublicIpEipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth">PutBandwidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBandwidth` <a name="PutBandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth"></a>

```csharp
private void PutBandwidth(AsConfigurationV1InstanceConfigPublicIpEipBandwidth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference">AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidthInput">BandwidthInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipTypeInput">IpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipType">IpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidth"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference Bandwidth { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference">AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference</a>

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidthInput"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEipBandwidth BandwidthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---

##### `IpTypeInput`<sup>Optional</sup> <a name="IpTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipTypeInput"></a>

```csharp
public string IpTypeInput { get; }
```

- *Type:* string

---

##### `IpType`<sup>Required</sup> <a name="IpType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipType"></a>

```csharp
public string IpType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.internalValue"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEip InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---


### AsConfigurationV1InstanceConfigPublicIpOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsConfigurationV1InstanceConfigPublicIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip">PutEip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEip` <a name="PutEip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip"></a>

```csharp
private void PutEip(AsConfigurationV1InstanceConfigPublicIpEip Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eip">Eip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference">AsConfigurationV1InstanceConfigPublicIpEipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eipInput">EipInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eip`<sup>Required</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eip"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEipOutputReference Eip { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference">AsConfigurationV1InstanceConfigPublicIpEipOutputReference</a>

---

##### `EipInput`<sup>Optional</sup> <a name="EipInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eipInput"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIpEip EipInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.internalValue"></a>

```csharp
public AsConfigurationV1InstanceConfigPublicIp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---



